import React, { Component } from "react";
import $ from "jquery";

class Listarticle extends Component {
  constructor(props) {
    super(props);
  }
  delete(id) {
    $.ajax({
      type: "DELETE",
      url: `/api/product/${id}`,
      success: (data) => {
        this.props.changeView("all");
        console.log(data);
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div>
        {console.log(this.props.data.brand)}
        {this.props.data.map((elem, key) => {
          return (
            <div key={key}>
              <div>{elem.id}</div>
              <div>{elem.name}</div>
              <div>{elem.categorie.name}</div>
              <div>{elem.brand.name}</div>
              <div>{elem.price}</div>
              <div>{elem.quantity}</div>
              <div>{elem.image}</div>
              <div>{elem.description}</div>
              <button
                type="submit"
                onClick={() => this.props.changeView("Update", elem)}>
                Update
              </button>
              <button type="submit" onClick={() => this.delete(elem._id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Listarticle;
