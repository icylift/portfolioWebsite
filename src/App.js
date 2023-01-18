import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';






function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Body />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
