import React, { Component } from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import Login from "./auth/login.jsx";
import Manager from "./manager.jsx";
import Regist from "./Register.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      username: ""
    };
    this.renderview = this.renderview.bind(this);
    this.changeView = this.changeView.bind(this);
    this.Getsession = this.Getsession.bind(this);
  }
  changeView(view) {
    this.setState({
      view: view
    });
  }
  Getsession() {
    $.ajax({
      type: "GET",
      url: "/api/auth/user",
      success: (data) => {
        console.log(data);
        this.setState({
          username: data[0].username,
          role: data[0].role
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  renderview() {
    if (this.state.username === "") {
      return (
        <div>
          <Login Getsession={this.Getsession} />
        </div>
      );
    } else {
      if (this.state.role === "manager") {
        return <Manager username={this.state.username} />;
      } else {
        return <Regist />;
      }
    }
  }
  componentDidMount() {
    this.Getsession();
  }
  render() {
    return <div>{this.renderview()}</div>;
  }
}
export default App;

ReactDom.render(<App />, document.getElementById("myapp"));
