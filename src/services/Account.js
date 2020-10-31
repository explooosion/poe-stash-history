import { restApi } from '../boot/axios';
import { replaceUrlParams } from '../utils';

const urlMyAccount = process.env.REACT_APP_MY_ACCOUNT;
const urlGetCharacters = process.env.REACT_APP_GET_CHARACTERS;
const urlGetItems = process.env.REACT_APP_GET_ITEMS;

/**
 * Get account html to parse account name
 */
export const getMyAccount = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlMyAccount, params))
    .then((res) => res)
    .catch((err) => err);

/**
 * Get account characters
 * @param {object} params { accountName }
 */
export const getCharacters = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlGetCharacters, params))
    .then((res) => res)
    .catch((err) => err);

/**
 * Get account character info and items
 * @param {object} params { accountName, character }
 */
export const getItems = (params = {}) =>
  restApi
    .get(replaceUrlParams(urlGetItems, params))
    .then((res) => res)
    .catch((err) => err);
