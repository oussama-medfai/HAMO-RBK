import React, { Component } from "react";
import Custumer from "./../custumer/Custumer.jsx";

class NavbarReg extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <a href="">Home</a>
        <a href="">Bill</a>
        <a href="">Add Custumer</a>
      </nav>
    );
  }
}
export default NavbarReg;
