import { restApi } from '../boot/axios';
import { replaceUrlParams } from '../utils';

const urlMyAccount = process.env.REACT_APP_MY_ACCOUNT;
const urlStashHistory = process.env.REACT_APP_GET_GUILD_STASH_HISTORY;
const urlGuildProfile = process.env.REACT_APP_GET_GUILD_PROFILE;

/**
 * Get account html to parse guidid
 */
export const getGuildId = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlMyAccount, params))
    .then(res => res)
    .catch(err => err);

/**
 * Get stash history by id
 * @param {object} params { id }
 */
export const getStashHistory = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlStashHistory, params))
    .then(res => res)
    .catch(err => err);

/**
 * Get guild profile by id
 * @param {object} params { id }
 */
export const getGuildProfile = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlGuildProfile, params))
    .then(res => res)
    .catch(err => err);
