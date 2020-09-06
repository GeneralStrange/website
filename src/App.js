import React, { Component } from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Contact from "./components/contact";
import Twitch from "./components/twitch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/twitch" component={Twitch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
