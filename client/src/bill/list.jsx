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
        <div>
          <div>{ele.product.name}</div>
          <div>{ele.product.price}$</div>
          <div>{ele.number}</div>
          <td>
            <button>Delete</button>
          </td>
        </div>
      ));
    }
  }
  render() {
    return this.renderView();
  }
}
export default List;
