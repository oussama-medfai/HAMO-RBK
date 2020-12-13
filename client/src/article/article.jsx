import React, { Component } from "react";
import $ from "jquery";
import Listarticle from "./listArticle.jsx";
import Articleadd from "./articleadd.jsx";
import Articleupdate from "./articleupdate.jsx";
import Brandeadd from "./brandadd.jsx";
import Categorieadd from "./categorieadd.jsx";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "all",
      categorie: [],
      data: [],
      mod: {}
    };
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }
  changeView(view, obj) {
    if (view === "Update") {
      this.setState({
        mod: obj,
        view: view
      });
      return;
    }
    this.setState({
      view: view
    });
  }
  renderView() {
    if (this.state.view === "all") {
      return (
        <Listarticle changeView={this.changeView} data={this.state.data} />
      );
    } else if (this.state.view === "Addarticle") {
      return <Articleadd />;
    } else if (this.state.view === "Update") {
      return <Articleupdate data={this.state.mod} />;
    } else if (this.state.view === "Addbrand") {
      return <Brandeadd />;
    } else if (this.state.view === "Addcategorie") {
      return <Categorieadd />;
    }
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/product",
      success: (data) => {
        this.setState({
          data: data
        });
        console.log(data);
      },
      error: (err) => console.log(err)
    });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.changeView("all")}>
          List Article
        </button>
        <button type="button" onClick={() => this.changeView("Addarticle")}>
          Add Article
        </button>
        <button type="button" onClick={() => this.changeView("Addcategorie")}>
          Add Categorie
        </button>
        <button type="button" onClick={() => this.changeView("Addbrand")}>
          Add Brand
        </button>
        {this.renderView()}
      </div>
    );
  }
}
export default Article;
