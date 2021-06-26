import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/about'>About</Link>
          <br />
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <hr />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
