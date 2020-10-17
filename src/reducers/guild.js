import dayjs from 'dayjs';
import _ from 'lodash';

export const FETCH_STASH_HISTORY = 'FETCH_STASH_HISTORY';
export const FETCH_STASH_HISTORY_SUCCESS = 'FETCH_STASH_HISTORY_SUCCESS';
export const FETCH_STASH_HISTORY_ERROR = 'FETCH_STASH_HISTORY_ERROR';

const initialState = {
  history: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STASH_HISTORY:
      return { ...state, loading: true };
    case FETCH_STASH_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        history: action.payload.entries.map(data => ({
          ..._.omit(data, ['account', 'time']),
          ...data.account,
          time: dayjs.unix(data.time).format('YYYY-MM-DD HH:mm:ss'),
        })),
      };
    case FETCH_STASH_HISTORY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
