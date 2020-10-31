import { replaceUrlParams } from './index';

describe('Test Utils', () => {
  it('replaceUrlParams match', () => {
    const urlResult =
      'https://web.poe.garena.tw/character-window/get-characters?accountName=MyAccount';
    const url = process.env.REACT_APP_GET_CHARACTERS;
    const params = { accountName: 'MyAccount' };
    expect(replaceUrlParams(url, params)).toBe(urlResult);
  });

  it('replaceUrlParams not match', () => {
    const url = process.env.REACT_APP_GET_CHARACTERS;
    const params = {};
    expect(replaceUrlParams(url, params)).toBe(url);
  });
});
