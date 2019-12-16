import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navi from './Nav'
import { Component } from 'react';
import LandingPage from "./components/LandingPage/LandingPage.js";
import About from './components/About/About';
import Register from './components/Register/register';
import Login from './components/Login/login'

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
          <Route exact path="/register" component={Register} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    );
  }

}