import { replaceUrlParams } from './index';

describe('Test Utils', () => {
  it('replaceUrlParams', () => {
    const urlResult = 'https://web.poe.garena.tw/character-window/get-characters?accountName=MyAccount';
    const url = process.env.REACT_APP_GET_CHARACTERS;
    const params = { accountName: 'MyAccount' };
    expect(replaceUrlParams(url, params)).toBe(urlResult);
  });
});
