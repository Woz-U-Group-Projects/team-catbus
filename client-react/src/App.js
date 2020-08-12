import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Task from "./components/Task";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Task} exact />
        </div>
      </Router>
    );
  }
}

export default App;
