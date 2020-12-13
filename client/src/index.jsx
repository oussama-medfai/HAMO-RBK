import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import GetUser from "./auth/GetUser.jsx";

class App extends Component {
  render() {
    return (
      <span>
        <h1>Hello</h1>
        <Login />
        <h1>Register</h1>
        <Register />
        <h1>User</h1>
        <GetUser />
      </span>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("myapp"));
