import _ from 'lodash';

/**
 * Replace url params to target value
 * @param {string} url Request Uul
 * @param {object} params Params
 * @example id=:id&name=:name => id=1&name=Robby
 */
export function replaceUrlParams(url = '', params = {}) {
  if (_.isEmpty(params)) {
    return url;
  } else {
    const prefix = ':';
    // { id: 1, name: 'Robby' } => { ':id': 1, ':name': 'Robby' }
    const mapObj = _.chain(params)
      .keys(params)
      .reduce((acc, cur) => ({ ...acc, [`${prefix}${cur}`]: params[cur] }), {})
      .value();
    // /:id|:name/gi
    const rexStr = _.chain(mapObj)
      .keys(mapObj)
      .reduce((acc, cur) => [...acc, cur], [])
      .join('|')
      .value();
    // id=:id&name=:name => id=1&name=Robby
    return _.replace(url, new RegExp(rexStr, 'gi'), matched => mapObj[matched]);
  }
}
