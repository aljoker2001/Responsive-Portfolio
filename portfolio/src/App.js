import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
