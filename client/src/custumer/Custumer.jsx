import React, { Component } from "react";
import Listecustumer from "./Listecustumer.jsx";
import Addcustumer from "./Addcustumer.jsx";
import Updatecustumer from "./Updatecustumer.jsx";

class Custumer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "all",
      mod: {}
    };
    this.changeView = this.changeView.bind(this);
    this.renderviews = this.renderviews.bind(this);
  }
  changeView(id, target) {
    if (target) {
      this.setState({ mod: target });
    }
    this.setState({
      view: id
    });
  }
  renderviews() {
    if (this.state.view === "all") {
      return <Listecustumer changeView={this.changeView} />;
    } else if (this.state.view === "add") {
      return <Addcustumer />;
    } else if (this.state.view === "update") {
      return <Updatecustumer data={this.state.mod} />;
    }
  }
  render() {
    return (
      <div>
        <div>
          {/* <button onClick={() => this.changeView("all")}>List Custumer</button>
          <button onClick={() => this.changeView("add")}>Add Custumer</button> */}
          <div className="sidenav">
            <a href="#about" onClick={() => this.changeView("all")}>
              Customer List
            </a>
            <a href="#services" onClick={() => this.changeView("add")}>
              Add Customer
            </a>
          </div>
        </div>
        <div>{this.renderviews()}</div>
      </div>
    );
  }
}
export default Custumer;
