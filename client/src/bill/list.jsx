import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.renderView = this.renderView.bind(this);
  }
  renderView() {
    if (this.props.listproduct) {
      return this.props.listproduct.map((ele) => (
        <tr>
          <td>{ele.product.name}</td>
          <td>{ele.product.price}</td>
          <td>{ele.number}</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      ));
    }
  }
  render() {
    return this.renderView();
  }
}
export default List;
