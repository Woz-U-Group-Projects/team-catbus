import React from "react";
import axios from "axios";
import SearchBox from '../components/SearchBox';
import '../task.min.css'
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  addTask = () => {
    let url = "http://localhost:3001/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };


  render() {
    return (
      <div className='tc'>
        <h3 className='f1'>Game Geek</h3>
        <img src = "logo.png" alt ="gamegeek_logo" width="500" height="500"></img>
        
        <SearchBox />
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.taskid}>
              {p.name} : {p.complete ? "complete" : "not complete"} <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
