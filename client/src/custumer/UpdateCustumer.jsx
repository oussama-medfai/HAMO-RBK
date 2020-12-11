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
      <div>
        <h1>Update Custumer:</h1>
        <form onSubmit={this.editCustumer}>
          <label>
            ID:
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
            <input
              name="phone"
              type="number"
              required
              value={this.state.phone}
              onChange={this.onChangeHandler}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Email:
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
            Points:
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
    );
  }
}

export default UpdateCustumer;
