import React from 'react';
import './App.css';
import Header from './common/header/Header';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/"/>
          {/* <About /> */}
          <Route />
        </Switch>
      </Router>
    </>
  );
}

export default App;
