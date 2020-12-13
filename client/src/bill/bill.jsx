import React, { Component } from "react";
import BillLists from "./billLists.jsx";
import $ from "jquery";

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tax: 0,
      product: [],
      listproduct: []
    };
    this.addproduct = this.addproduct.bind(this);
  }
  addproduct(id, number) {
    let old = this.state.listproduct;
    let x;
    for (let i = 0; i < this.state.product.length; i++) {
      if (this.state.product[i]._id === id) {
        x = { product: this.state.product[i], number: number };
      }
    }

    old.push(x);
    this.setState({
      listproduct: old
    });
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/product",
      success: (data) => {
        this.setState({
          product: data
        });
        console.log(data);
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div>
        <select>
          <option></option>
        </select>
        <BillLists
          listproduct={this.state.listproduct}
          product={this.state.product}
          addproduct={this.addproduct}
        />
        <div>
          <div>
            <div>Subtotal</div>
            <div></div>
          </div>
          <div>
            <div>Tax{this.state.tax}% </div>
            <div></div>
          </div>
          <div>
            <div>Total Due</div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bill;
