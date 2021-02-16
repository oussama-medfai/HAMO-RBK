import React, { Component } from "react";
import BillLists from "./billLists.jsx";
import $ from "jquery";
import List from "./list.jsx";

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tax: 18,
      product: [],
      listproduct: [],
      custumors: [],
      custumor: "",
      total: 0
    };
    this.addproduct = this.addproduct.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.submitbill = this.submitbill.bind(this);
  }
  addproduct(id, quantity) {
    let old = this.state.listproduct;
    let x;
    for (let i = 0; i < this.state.product.length; i++) {
      if (this.state.product[i]._id === id) {
        x = {
          product: this.state.product[i],
          quantity: quantity
        };
      }
    }
    old.push(x);
    let total = 0;
    for (var i = 0; i < old.length; i++) {
      total = total + old[i].product.price * old[i].quantity;
    }
    total += total * (this.state.tax / 100);
    this.setState({
      total: total
    });
    this.setState({
      listproduct: old
    });
  }
  submitbill() {
    let order = [];

    for (var i = 0; i < this.state.listproduct.length; i++) {
      let obj = {
        product: this.state.listproduct[i].product._id,
        quantity: this.state.listproduct[i].quantity
      };
      order.push(obj);
    }

    let send = {
      custumor: this.state.custumor,
      order: order,
      total: this.state.total
    };
    $.ajax({
      type: "POST",
      url: "/api/bill",
      data: send,
      success: (data) => {
        console.log(data);
      },
      error: (err) => console.log(err)
    });
  }
  handlechange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
      },
      error: (err) => console.log(err)
    });
    $.ajax({
      type: "GET",
      url: "/api/custumer",
      success: (data) => {
        this.setState({
          custumors: data
        });
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div>
        <select
          name="custumor"
          value={this.state.custumor}
          onChange={this.handlechange}>
          <option value="">none</option>
          {this.state.custumors.map((elem) => {
            return <option value={elem._id}>{elem.name}</option>;
          })}
        </select>
        <BillLists
          listproduct={this.state.listproduct}
          product={this.state.product}
          addproduct={this.addproduct}
        />
        <div>
          <div>
            <List
              product={this.state.product}
              listproduct={this.state.listproduct}
            />
          </div>
          <div className="right">
            <h3>Subtotal</h3>
            <div>Tax{this.state.tax}% </div>
            <div>Total {this.state.total} $</div>
          </div>
          {/* <div>
            <button onClick={this.submitbill}>add</button>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Bill;
