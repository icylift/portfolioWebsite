import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
