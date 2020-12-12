import React, { Component } from "react";
import ReactDom from "react-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Article from "./article/article.jsx";
import Navbar from "./navbar/navbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
      role: "manager"
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
    if (this.state.view === "") {
    } else if (this.state.view === "art") {
      return <Article />;
    } else if (this.state.view === "cus") {
      return <Custumer />;
    }
  }
  render() {
    return (
      <div>
        <Navbar changeView={this.changeView} role={this.state.role} />
        <br />
        <br />
        {this.renderview()}
      </div>
    );
  }
}
export default App;
ReactDom.render(<App />, document.getElementById("myapp"));
