import { combineReducers } from 'redux';

// import example from './example';
import auth from './auth';
import guild from './guild';
import account from './account';

export default combineReducers({
  // example,
  auth,
  guild,
  account,
})
