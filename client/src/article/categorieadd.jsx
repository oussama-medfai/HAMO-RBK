import React from "react";
import $ from "jquery";

class Categorieadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: ""
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelsubmit = this.handelsubmit.bind(this);
  }
  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handelsubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    var data = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    };
    $.ajax({
      type: "POST",
      url: "/api/categorie",
      data: data,
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
          <form onSubmit={this.handelsubmit}>
            <h1>Add Categorie</h1>
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
              desciption :<br />
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

export default Categorieadd;
