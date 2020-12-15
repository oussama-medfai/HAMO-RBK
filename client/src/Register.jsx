import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Bill from "./bill/bill.jsx";

class Regist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}> Home </Link>
              </li>

              <li>
                <Link to={"/custumer"}> custumer </Link>
              </li>

              <li>
                <Link to={"/Bill"}> Bill </Link>
              </li>
              <li>
                <a onClick={() => this.props.logout()}>
                  Welcome {this.props.username}
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Custumer} />
              <Route path="/custumer" component={Custumer} />
              <Route path="/bill" component={Bill} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Regist;
