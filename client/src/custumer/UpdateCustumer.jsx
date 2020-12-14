import React, { Component } from "react";
import axios from "axios";
class UpdateCustumer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.data._id,
      id: this.props.data.id,
      name: this.props.data.name,
      genre: this.props.data.genre,
      date: this.props.data.date,
      phone: this.props.data.phone,
      email: this.props.data.email,
      points: this.props.data.points
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.editCustumer = this.editCustumer.bind(this);
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  editCustumer() {
    var custumer = {
      _id: this.state._id,
      id: this.state.id,
      name: this.state.name,
      genre: this.state.genre,
      date: this.state.date,
      phone: this.state.phone,
      email: this.state.email,
      points: this.state.points
    };
    axios.put(`/api/custumer`, custumer).then((result) => {
      console.log(result);
    });
  }
  render() {
    return (
      <div className="card">
        <div className="container">
          <h1>Update Custumer:</h1>
          <form onSubmit={this.editCustumer}>
            <label>
              ID: <br />
              <input
                readOnly="readonly"
                name="id"
                type="text"
                required
                value={this.state.id}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Name:
              <br />
              <input
                name="name"
                type="text"
                required
                value={this.state.name}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Genre:
              <br />
              <input
                name="genre"
                type="text"
                required
                value={this.state.genre}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Date:
              <br />
              <input
                name="date"
                type="Date"
                required
                value={this.state.date}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Phone:
              <br />
              <input
                name="phone"
                type="number"
                required
                value={this.state.phone}
                onChange={this.onChangeHandler}
              />
            </label>
            <br />
            <label>
              Email:
              <br></br>
              <br></br>
              <input
                name="email"
                type="Email"
                required
                value={this.state.email}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Points: <br />
              <input
                name="points"
                type="number"
                required
                value={this.state.points}
                onChange={this.onChangeHandler}
              />
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateCustumer;
