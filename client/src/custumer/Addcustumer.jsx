import React, { Component } from "react";
import axios from "axios";

class Addcustumer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      genre: "",
      date: "",
      phone: 0,
      email: "",
      points: 0
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addCustumer = this.addCustumer.bind(this);
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  addCustumer(e) {
    e.preventDefault();
    try {
      const newcustumer = axios.post("/api/custumer/", {
        id: this.state.id,
        name: this.state.name,
        genre: this.state.genre,
        date: this.state.date.toString(),
        phone: this.state.phone,
        email: this.state.email,
        points: this.state.points
      });
    } catch (err) {
      console.log(err);
    }
    window.alert("new custumer added");
  }

  render() {
    return (
      <div>
        <h1>Add Custumer:</h1>
        <form onSubmit={this.addCustumer}>
          <label>
            ID:
            <input
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

export default Addcustumer;
