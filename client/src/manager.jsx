import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Article from "./article/article.jsx";
import Register from "./auth/AddRegister.jsx";
import Appc from "./stat/Appc.jsx";
class Manager extends Component {
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
                <Link to={"/custumer"}> Customer </Link>
              </li>

              <li>
                <Link to={"/article"}> Article </Link>
              </li>

              <li>
                <Link to={"/register"}> Register </Link>
              </li>
              <li>
                <Link to={"/stat"}>Statistic</Link>
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
              <Route exact path="/" component={Appc} />
              <Route path="/custumer" component={Custumer} />
              <Route path="/article" component={Article} />
              <Route path="/register" component={Register} />
              <Route
                path="/stat"
                component={() => (
                  <Appc data={this.props.data} label={this.props.label} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Manager;
