import React from 'react';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
