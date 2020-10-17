// import _ from 'lodash';

/**
 * Replace url params to target value
 * @param {string} url Request Uul
 * @param {object} params Params
 */
export function replaceUrlParams(url = '', params = {}) {
  const prefix = ':';
  // { id: 1, name: 'Robby' } => { ':id': 1, ':name': 'Robby' }
  const mapObj = Object.keys(params).reduce((acc, cur) => ({ ...acc, [`${prefix}${cur}`]: params[cur] }), {});
  // /:id|:name/gi
  const rexStr = Object.keys(mapObj).reduce((acc, cur) => [...acc, cur], []).join('|');
  // id=:id&name=:name => id=1&name=Robby
  const result = url.replace(new RegExp(rexStr, 'gi'), matched => mapObj[matched]);
  return result;
}

