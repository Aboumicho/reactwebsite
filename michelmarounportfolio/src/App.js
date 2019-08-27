import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './Loader';
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Skills from './Skills';
import Experiences from './Experiences';
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      {/* <Loader/> */}
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Experiences/>
      <Portfolio/>
    </div>
  );
}

export default App;
