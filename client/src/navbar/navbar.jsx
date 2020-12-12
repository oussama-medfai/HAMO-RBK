import React, { Component } from "react";

import NavbarManger from "./NavbarManger.jsx";
import NavbarReg from "./NavbarReg.jsx";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.renderview = this.renderview.bind(this);
  }
  renderview() {
    if (this.props.role === "manager") {
      return <NavbarManger changeView={this.props.changeView} />;
    } else if (this.props.role === "register") {
      return <NavbarReg />;
    }
  }
  render() {
    return <nav>{this.renderview()}</nav>;
  }
}
export default Navbar;
