import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navi from './Nav'
import { Component } from 'react';
import LandingPage from "./components/LandingPage/LandingPage.js";
import About from './components/About/About';
import SignUpExample from './components/Login/Signup/signup';
import TestPage from './components/TestPage/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navi></Navi>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUpExample} />
          <Route exact path="/testpage" component={TestPage} />
        </div>
      </Router>
    );
  }

}