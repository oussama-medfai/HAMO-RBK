import React, { Component } from "react";
import $ from "jquery";

class Listarticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  delete(id) {
    $.ajax({
      type: "DELETE",
      url: `/api/product/${id}`,
      success: (data) => {
        this.props.getProduct();
        this.props.changeView("all");
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div>
        <h1>Product :</h1>
        {this.props.data.map((elem, index) => {
          return (
            <div className="card">
              <div key={index} className="container">
                <h1>{elem.name}</h1>
                <p>{elem.categorie.name}</p>
                <p>{elem.brand.name}</p>
                <p>{elem.price}</p>
                <p>{elem.quantity}</p>
                <p>{elem.description}</p>
                <small>
                  <button
                    type="submit"
                    onClick={() => this.props.changeView("Update", elem)}>
                    Update
                  </button>

                  <button type="submit" onClick={() => this.delete(elem._id)}>
                    Delete
                  </button>
                </small>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Listarticle;
