const DOMAIN = 'https://web.poe.garena.tw';
const COOKIE_KEY = 'POESESSID';

export const getSessionId = () => {
  return new Promise(resolve => {
    if (window.chrome.cookies) {
      window.chrome.cookies.get({ url: DOMAIN, name: COOKIE_KEY }, cookies => {
        console.log('getSessionId', cookies);
        resolve(cookies ?? {});
      });
    } else {
      resolve({});
    }
  });
}
