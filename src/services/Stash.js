import axios from 'axios';

const URL = 'https://web.poe.garena.tw/api/guild/119610/stash/history';

export const getStash = async () =>
  await axios.get(URL)
    .then(res => res)
    .catch(err => err);

