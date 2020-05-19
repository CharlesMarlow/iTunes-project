import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import TrackDetails from "./views/tracks/TrackDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/track/:id" component={TrackDetails} />
      </Router>
    );
  }
}

export default App;
