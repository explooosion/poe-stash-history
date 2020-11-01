import { call, put, takeLatest, delay } from 'redux-saga/effects';
import cheerio from 'cheerio';
import _ from 'lodash';
import { DateTime as dt } from 'luxon';

import {
  FETCH_GUILD_PROFILE,
  FETCH_GUILD_PROFILE_SUCCESS,
  FETCH_GUILD_PROFILE_ERROR,
  FETCH_STASH_HISTORY,
  FETCH_STASH_HISTORY_SUCCESS,
  FETCH_STASH_HISTORY_ERROR,
  FETCH_MEMBER_CHARACTERS,
  FETCH_MEMBER_CHARACTERS_SUCCESS,
  FETCH_MEMBER_CHARACTERS_ERROR,
  STORAGE_GUILD_PROFILE,
  STORAGE_MEMBER_CHARACTERS,
} from '../reducers/guild';

import {
  getStashHistory,
  getGuildProfile,
  getGuildId,
} from '../services/Guild';
import { getCharacters } from '../services/Account';

import storage from '../boot/storage';

dt.local();

function* fetchStashHistory({ params }) {
  const { id } = params;

  let flag = false;
  let payload = {};

  const response = yield call(getStashHistory, { id });

  if (response.status === 200) {
    flag = true;
    payload = response.data.entries.map((data) => ({
      ..._.omit(data, ['account', 'time']),
      ...data.account,
      test: data.time,
      time: dt.fromSeconds(data.time).toFormat('yyyy-MM-dd HH:mm:ss'),
    }));
  }

  if (flag) {
    yield put({ type: FETCH_STASH_HISTORY_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_STASH_HISTORY_ERROR });
  }
}

function* fetchGuildProfile() {
  let flag = false;
  let payload = {};

  if (storage.hasIn(STORAGE_GUILD_PROFILE)) {
    flag = true;
    payload = storage.getItem(STORAGE_GUILD_PROFILE);
  } else {
    const responseId = yield call(getGuildId);

    if (responseId.status === 200) {
      payload.url = cheerio
        .load(responseId.data)('.profile-box.profile a')
        .attr('href');
      // eslint-disable-next-line
      payload.id = payload.url.match(/([^\/]*)\/*$/)[1];

      if (payload.id) {
        const responseProfile = yield call(getGuildProfile, { id: payload.id });

        if (responseProfile.status === 200) {
          const $ = cheerio.load(responseProfile.data);
          payload.name = $('.details-content .name').text();
          payload.tag = $('.details-content .guild-tag').text();
          payload.status = $('.details-content .guild-status').text();
          payload.members = $('.members .member > span')
            .map((i, e) => ({
              accountName: $(e).find('a').text(),
              memberType: $(e).find('.memberType').text(),
              challenge:
                Number(
                  $(e)
                    .find('.profile-link')
                    .attr('class')
                    ?.split(' ')[2]
                    ?.replace('completed', '')
                ) || '-',
            }))
            .get();

          flag = true;
          storage.setItem(STORAGE_GUILD_PROFILE, payload);
        }
      }
    }
  }

  if (flag) {
    yield put({ type: FETCH_GUILD_PROFILE_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_GUILD_PROFILE_ERROR });
  }
}

function* fetchMemberCharacters({ params }) {
  let flag = false;
  let payload = [];

  if (storage.hasIn(STORAGE_MEMBER_CHARACTERS)) {
    flag = true;
    payload = storage.getItem(STORAGE_MEMBER_CHARACTERS);
  } else {
    yield call(recursive, [...params]);
  }

  if (flag) {
    yield put({ type: FETCH_MEMBER_CHARACTERS_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_MEMBER_CHARACTERS_ERROR });
  }

  function* recursive(datas = []) {
    if (datas.length > 0) {
      yield delay(process.env.REACT_APP_API_QUERY_INTERVAL);
      const target = datas.shift();
      const characters = yield call(fetchMemberCharacter, target);
      payload.push({ characters, accountName: target.accountName });
      console.log(
        `[ ${params.length - datas.length}/${
          params.length
        } ] fetchMemberCharacter`
      );
      yield call(recursive, datas);
    } else {
      flag = true;
      storage.setItem(STORAGE_MEMBER_CHARACTERS, payload);
    }
  }
}

function* fetchMemberCharacter({ accountName }) {
  const response = yield call(getCharacters, { accountName });
  return response.status === 200 ? response.data : {};
}

export default function* Guild() {
  yield takeLatest(FETCH_GUILD_PROFILE, fetchGuildProfile);
  yield takeLatest(FETCH_STASH_HISTORY, fetchStashHistory);
  yield takeLatest(FETCH_MEMBER_CHARACTERS, fetchMemberCharacters);
}
