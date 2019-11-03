import React from 'react';
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Profile from './components/profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
      <Navbar />
      <SearchBar />
      <Profile />
      <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;