import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custumer from "./Custumer/Custumer.jsx";
import Article from "./article/article.jsx";
import Bill from "./bill/bill.jsx";

class Manager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <a>
              <Link to={"/"}> Home </Link>
            </a>
            <a>
              <Link to={"/custumer"}> custumer </Link>
            </a>
            <a>
              <Link to={"/article"}> article </Link>
            </a>
            <a>
              <Link to={"/bill"}> bill </Link>
            </a>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Custumer} />
              <Route path="/custumer" component={Custumer} />
              <Route path="/article" component={Article} />
              <Route path="/bill" component={Bill} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Manager;
