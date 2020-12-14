import React, { Component } from "react";
import BillList from "./billlist.jsx";
import List from "./list.jsx";

class BillLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      quantity: 0
    };

    this.add = this.add.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }
  add() {
    this.props.addproduct(this.state.product, this.state.quantity);
  }
  handlechange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.product);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select
                  name="product"
                  value={this.state.product}
                  onChange={this.handlechange}>
                  <option value="">none</option>
                  {this.props.product.map((elem) => {
                    return <option value={elem._id}>{elem.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  onChange={this.handlechange}
                  value={this.state.quantity}
                />
              </td>
              <td>
                <button onClick={this.add}>Add</button>
              </td>
            </tr>
            {/* <BillList /> */}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BillLists;
