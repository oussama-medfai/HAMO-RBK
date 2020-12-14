import React, { Component } from "react";
import axios from "axios";
class Listecustumer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custumers: [
        {
          id: 1,
          name: "amin",
          genre: "Male",
          date: "22-10-2020",
          phone: 2222222,
          email: "amin@gmail.com"
        },
        {
          id: 2,
          name: "amin",
          genre: "Male",
          date: "22-10-2020",
          phone: 2222222,
          email: "amin@gmail.com"
        },
        {
          id: 3,
          name: "amin",
          genre: "Male",
          date: "22-10-2020",
          phone: 2222222,
          email: "amin@gmail.com"
        }
      ]
    };
    this.removeCustumer = this.removeCustumer.bind(this);
    this.fetchcustumers = this.fetchcustumers.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  fetchcustumers() {
    axios.get("/api/custumer").then((res) => {
      this.setState({ custumers: res.data });
      console.log(this.state.custumers);
    });
  }
  componentDidMount() {
    this.fetchcustumers();
  }

  removeCustumer(event) {
    var index = event.target.id;
    try {
      const custumerRemoved = axios
        .delete(`/api/custumer/${index}`)
        .then(({ data }) => {
          this.fetchcustumers();
        });
    } catch (err) {
      console.log(err);
    }
    window.alert("custumer deleted");
  }
  render() {
    return (
      <div>
        <h1>Customers:</h1>
        <table id="customers">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Date of birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Points</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.custumers.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.genre}</td>
                <td>{element.date}</td>
                <td>{element.phone}</td>
                <td>{element.email}</td>
                <td>{element.points}</td>
                <td>
                  <input
                    id={element._id}
                    type="submit"
                    value="delete"
                    onClick={this.removeCustumer}
                  />
                </td>
                <td>
                  <input
                    type="submit"
                    value="update"
                    onClick={() => this.props.changeView("update", element)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Listecustumer;
