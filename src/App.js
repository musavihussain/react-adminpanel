import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar/>
      <div className="container">
      <h1>Hello</h1>
      </div>
     

    </div>
    </Router>
  );
}

export default App;
