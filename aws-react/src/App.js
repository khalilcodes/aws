import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Profile />
    </div>
  );
}

export default App;
