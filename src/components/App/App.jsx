import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
