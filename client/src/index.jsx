import React, { Component } from "react";
import ReactDom from "react-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Article from "./article/article.jsx";
import Navbar from "./navbar/navbar.jsx";
import Bill from "./bill/bill.jsx";
import $ from "jquery";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import Manager from "./manager.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
      username: ""
    };
    this.renderview = this.renderview.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({
      view: view
    });
  }
  renderview() {
    if (this.state.username === "") {
      return (
        <div>
          <Login />
          <Register />
        </div>
      );
    } else {
      return <Manager />;
    }
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/auth/user",
      success: (data) => {
        console.log(data);
        this.setState({
          username: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderview()}
      </div>
    );
  }
}
export default App;

ReactDom.render(<App />, document.getElementById("myapp"));
