import React from "react";
import $ from "jquery";

class Articleadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      categorie: "",
      brand: "",
      image: "",
      description: "",
      price: 0,
      quantity: 0,
      allcat: [],
      allbrand: []
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelsubmit = this.handelsubmit.bind(this);
  }
  handelChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handelsubmit(e) {
    e.preventDefault();
    if (this.state.categorie === "") {
      window.alert("you need to fill the input");
      return;
    }
    if (this.state.brand === "") {
      window.alert("you need to fill the input");
      return;
    }
    var log = {
      id: this.state.id,
      name: this.state.name,
      categorie: this.state.categorie,
      price: this.state.price,
      quantity: this.state.quantity,
      brand: this.state.brand,
      image: this.state.image,
      description: this.state.description
    };
    $.ajax({
      type: "POST",
      url: "/api/product",
      data: log,
      success: (data) => {
        this.props.getProduct();
        this.props.changeView("all");
      },
      error: (err) => console.log(err)
    });
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/brand",
      success: (data) => {
        this.setState({ allbrand: data });
      },
      error: (err) => console.log(err)
    });
    $.ajax({
      type: "GET",
      url: "/api/categorie",
      success: (data) => {
        this.setState({ allcat: data });
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div className="card">
        <div className="container">
          <form onSubmit={this.handelsubmit}>
            <h1>Add Product</h1>
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
              <select
                name="categorie"
                value={this.state.categorie}
                onChange={this.handelChange}>
                <option value="">none</option>
                {this.state.allcat.map((ele) => (
                  <option value={ele._id}>{ele.name}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              brand :<br />
              <select
                name="brand"
                value={this.state.brand}
                onChange={this.handelChange}>
                <option value="">none</option>
                {this.state.allbrand.map((ele) => (
                  <option value={ele._id}>{ele.name}</option>
                ))}
              </select>
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
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    );
  }
}

export default Articleadd;
