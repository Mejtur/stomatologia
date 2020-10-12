import React from "react";
import "./App.css";
import Main from './pages/Main.js';
import Services from './pages/Services.js';
import AboutUs from './pages/AboutUs';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/uslugi">
          <Services />
        </Route>
        <Route path="/pomoc"></Route>
        <Route path="/o_nas">
          <AboutUs />
        </Route>
        <Route path="/cennik"></Route>
        <Route path="/kontakt"></Route>
      </Router>
    </div>
  );
}

export default App;
