import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import { FETCH_AUTH } from './reducers/auth';
import { FETCH_STASH_HISTORY } from './reducers/stash';

import Layout from './layout';

function App() {

  const dispatch = useDispatch();

  if (!window.chrome.cookies && window.chrome.experimental) {
    window.chrome.cookies = window.chrome.experimental.cookies;
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      dispatch({ type: FETCH_AUTH });
      dispatch({ type: FETCH_STASH_HISTORY });
    }
  }, [dispatch]);

  console.log('ENV', process.env.NODE_ENV);

  return (
    <Router>
      <Switch>
        <Route path="*" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
