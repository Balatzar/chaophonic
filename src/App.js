import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./containers/Landing";
import Tchat from "./containers/Tchat";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/:room" component={Tchat} />
        </div>
      </Router>
    );
  }
}

export default App;
