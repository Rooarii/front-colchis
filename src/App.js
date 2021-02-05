import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/app.scss';

import Nav from './components/Nav'
import Home from './components/Home'
function App() {


  return (
    <Fragment>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
        </div>
        <Home></Home>
        <Switch>
          {/* <Route exact path='/category' component={Category} /> */}
          <Route exact path='/bellatores'  />
          <Route exact path='/oratores' /> 
        </Switch>
      </Router>
      
    </Fragment>
    
  );
}

export default App;



// {/* <img src={logo} className="App-logo" alt="logo" />
//             <img alt="gauntlet" src="https://media.giphy.com/media/huDwzY5141blqS88Ld/giphy.gif" width="100" height="100" frameBorder="0" ></img>
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a> */}