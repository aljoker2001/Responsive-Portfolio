import React from 'react';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
