import React, { Component } from "react";

class NavbarManger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <a href="#" onClick={() => this.props.changeView("")}>
          Home
        </a>
        <a href="#" onClick={() => this.props.changeView("art")}>
          Article
        </a>
        <a href="#" onClick={() => this.props.changeView("cus")}>
          Custumer
        </a>
        <a href="#" onClick={() => this.props.changeView("stat")}>
          statistic
        </a>
        <a href="#" onClick={() => this.props.changeView("order")}>
          Order
        </a>
      </nav>
    );
  }
}
export default NavbarManger;
