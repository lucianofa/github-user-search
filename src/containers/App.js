// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import SearchScreen from '../screens/SearchScreen';
import Profile from '../screens/Profile';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SearchScreen} />
        <Route exact path="/:username" component={Profile} />
      </div>
    </Router>
  );
}