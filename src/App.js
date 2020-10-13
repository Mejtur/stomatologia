import React from "react";
import "./App.css";
import Main from './pages/Main.js';
import Services from './pages/Services.js';
import AboutUs from './pages/AboutUs';
import HelpPage from './pages/HelpPage';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

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
        <Route path="/pomoc">
          <HelpPage />
        </Route>
        <Route path="/o_nas">
          <AboutUs />
        </Route>
        <Route path="/cennik">
          <Prices />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
