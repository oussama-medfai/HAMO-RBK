import React, { Component } from "react";
import ReactDOM from "react-dom";
import Article from "./article/article.jsx";
class App extends Component {
  render() {
    return (
      <span>
        <h1>Hello</h1>
        <Article />
      </span>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("myapp"));
