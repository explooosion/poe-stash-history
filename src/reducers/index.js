import { combineReducers } from 'redux';

// import example from './example';
import auth from './auth';
import guild from './guild';
import account from './account';
import poe from './poe';

export default combineReducers({
  // example,
  auth,
  guild,
  account,
  poe,
});
