import axios from 'axios';

import { replaceUrlParams } from '../utils';

const urlGetItems = process.env.REACT_APP_GET_ITEMS;
const urlGetCharacters = process.env.REACT_APP_GET_CHARACTERS;

/**
 * Get account characters
 * @param {object} params { accountName }
 */
export const getCharacters = async (params = {}) =>
  await axios.get(replaceUrlParams(urlGetCharacters, params))
    .then(res => res)
    .catch(err => err);

/**
 * Get account character info and items
 * @param {object} params { accountName, character }
 */
export const getItems = async (params = {}) =>
  await axios.get(replaceUrlParams(urlGetItems, params))
    .then(res => res)
    .catch(err => err);
