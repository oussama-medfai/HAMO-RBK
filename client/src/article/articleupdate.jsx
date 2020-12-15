import React from "react";
import $ from "jquery";

class Articleupdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.data._id,
      id: this.props.data.id,
      name: this.props.data.name,
      categorie: this.props.data.categorie,
      brand: this.props.data.brand,
      image: this.props.data.image,
      description: this.props.data.description,
      price: this.props.data.price,
      quantity: this.props.data.quantity
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelupdate = this.handelupdate.bind(this);
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handelupdate(e) {
    console.log(this.state.name);
    var log = {
      _id: this.state._id,
      id: this.state.id,
      name: this.state.name,
      categorie: this.state.categorie,
      price: this.state.price,
      quantity: this.state.quantity,
      brand: this.state.brand,
      image: this.state.image,
      description: this.state.description
    };
    console.log(log);
    $.ajax({
      type: "PUT",
      url: "/api/product",
      data: log,
      success: (data) => {
        this.props.getProduct();
        this.props.changeView("all");
      },
      error: (err) => console.log(err)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="container">
          <h1>Update Product</h1>
          <label>
            ID :<br />
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            Name :<br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            categorie :<br />
            <input
              type="text"
              name="categorie"
              value={this.state.categorie}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            brand :<br />
            <input
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            price :<br />
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            Quantity :<br />
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            Image :<br />
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <label>
            description :<br />
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this.handelChange}
            />
          </label>
          <br />
          <input type="submit" value="Update" onClick={this.handelupdate} />
          <br />
        </div>
      </div>
    );
  }
}

export default Articleupdate;
