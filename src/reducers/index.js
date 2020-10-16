import { combineReducers } from 'redux';

// import example from './example';
import auth from './auth';
import stash from './stash';

export default combineReducers({
  // example,
  auth,
  stash,
})
