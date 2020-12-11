import React, { Component } from "react";
import ReactDom from "react-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Addcustumer from "./Custumer/Addcustumer.jsx";
import UpdateCustumer from "./Custumer/UpdateCustumer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {<Custumer />}

        {/* <UpdateCustumer /> */}
      </div>
    );
  }
}
export default App;

ReactDom.render(<App />, document.getElementById("myapp"));
