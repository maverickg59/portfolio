import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Projects } from './Components/Projects/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
