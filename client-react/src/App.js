import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Task from './components/Task';
import Card from './CardInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Task} exact />
          <Route path="/GameInfo" component={Card} />
        </div>
      </Router>
    );
  }
}

export default App;
