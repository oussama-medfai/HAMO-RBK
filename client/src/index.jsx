import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (<span>
               <h1>Hello</h1> 
            </span>
    )
  }
}
export default App;


ReactDOM.render(<App />, document.getElementById("myapp")) 