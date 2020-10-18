import axios from 'axios';

import { replaceUrlParams } from '../utils';

const urlMyAccount = process.env.REACT_APP_MY_ACCOUNT;
const urlStashHistory = process.env.REACT_APP_GET_GUILD_STASH_HISTORY;
const urlGuildProfile = process.env.REACT_APP_GET_GUILD_PROFILE;

/**
 * Get account html to parse guidid
 */
export const getGuildId = async (params = {}) =>
  await axios.get(replaceUrlParams(urlMyAccount, params))
    .then(res => res)
    .catch(err => err);

/**
 * Get stash history by id
 * @param {object} params { id }
 */
export const getStashHistory = async (params = {}) =>
  await axios.get(replaceUrlParams(urlStashHistory, params))
    .then(res => res)
    .catch(err => err);

/**
 * Get guild profile by id
 * @param {object} params { id }
 */
export const getGuildProfile = async (params = {}) =>
  await axios.get(replaceUrlParams(urlGuildProfile, params))
    .then(res => res)
    .catch(err => err);
