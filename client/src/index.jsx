import React, { Component } from "react";
import ReactDom from "react-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Article from "./article/article.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderview(){}
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Article />
        <Custumer />
      </div>

    );
  }
}
export default App;
ReactDom.render(<App />, document.getElementById("myapp"));


