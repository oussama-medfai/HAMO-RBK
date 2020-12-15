import React, { Component } from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import Login from "./auth/login.jsx";
import Manager from "./manager.jsx";
import Regist from "./Register.jsx";
import { CookiesProvider, Cookies } from "react-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      username: "",
      label: [],
      data: []
    };
    this.renderview = this.renderview.bind(this);
    this.changeView = this.changeView.bind(this);
    this.Getsession = this.Getsession.bind(this);
    this.logout = this.logout.bind(this);
    this.getStat = this.getStat.bind(this);
  }
  changeView(view) {
    this.setState({
      view: view
    });
  }
  getStat() {

  }
  logout() {
    const { cookies } = this.props;
    cookies.remove("username");

    this.setState({
      username: "",
      role: ""
    });
    this.Getsession();
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
  componentDidMount() {
    this.getStat();
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
        return (
          <Manager
            Getsession={this.Getsession}
            username={this.state.username}
            logout={this.logout}
            data={this.state.data}
            label={this.state.label}
          />
        );
      } else {
        return (
          <Regist
            logout={this.logout}
            username={this.state.username}
            Getsession={this.Getsession}
          />
        );
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

ReactDom.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("myapp")
);
