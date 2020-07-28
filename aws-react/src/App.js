import React from 'react';
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Profile from './components/profile';
import Mainpage from './components/MainPage';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
      <Switch>
          <Route exact path="/">
            <Navbar />
            <SearchBar />
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/mainpage">
            <Mainpage />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;