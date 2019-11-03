import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Profile from './components/profile';
import Mainpage from './components/MainPage';
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
        <Route path="/mainpage">
          <Mainpage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
