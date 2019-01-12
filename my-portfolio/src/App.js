import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron';
import AboutMe from './Components/AboutMe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <AboutMe />
      </div>
    );
  }
}

export default App;
