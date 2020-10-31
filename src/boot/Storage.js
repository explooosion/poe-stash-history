import _ from 'lodash';

export default class Storage {
  static setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static removeItem(key) {
    return localStorage.removeItem(key);
  }

  static clear() {
    return localStorage.clear();
  }

  static hasIn(key) {
    return _.isObject(Storage.getItem(key));
  }
}
