import { POESESSID } from '../mocks/MOCK_COOKIES';

const url = 'https://web.poe.garena.tw';
const name = 'POESESSID';

export const getSessionId = () => {
  return new Promise(resolve => {
    if (process.env.NODE_ENV === 'production') {
      if (window.chrome.cookies) {
        window.chrome.cookies.get({ url, name }, cookies => {
          resolve(cookies);
        });
      } else {
        resolve(POESESSID);
      }
    } else {
      resolve(POESESSID);
    }
  });
}

export const removeSessionId = () => {
  return new Promise(resolve => {
    if (process.env.NODE_ENV === 'production') {
      if (window.chrome.cookies) {
        window.chrome.cookies.remove({ url, name }, () => resolve());
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
