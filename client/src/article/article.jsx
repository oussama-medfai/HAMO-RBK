import React, { Component } from "react";
import Listarticle from "./listArticle.jsx";
import Articleadd from "./articleadd.jsx";
import Articleupdate from "./articleupdate.jsx";
import Brandeadd from "./brandadd.jsx";
import Categorieadd from "./categorieadd.jsx";
import axios from "axios";

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
    this.getProduct = this.getProduct.bind(this);
  }
  changeView(view, obj) {
    this.setState({
      mod: obj,
      view: view
    });
  }
  getProduct() {
    axios
      .get("http://localhost:8000/api/product")
      .then((x) => this.setState({ data: x.data }));
  }
  componentDidMount() {
    this.getProduct();
  }

  renderView() {
    if (this.state.view === "all") {
      return (
        <Listarticle changeView={this.changeView} data={this.state.data} />
      );
    } else if (this.state.view === "Addarticle") {
      return (
        <Articleadd getProduct={this.getProduct} changeView={this.changeView} />
      );
    } else if (this.state.view === "Update") {
      return <Articleupdate data={this.state.mod} />;
    } else if (this.state.view === "Addbrand") {
      return <Brandeadd />;
    } else if (this.state.view === "Addcategorie") {
      return <Categorieadd />;
    }
  }

  render() {
    return (
      <div>
        {/* <button type="button" onClick={() => this.changeView("all")}>
          List Product
        </button>

        <button type="button" onClick={() => this.changeView("Addarticle")}>
          Add Product
        </button>

        <button type="button" onClick={() => this.changeView("Addcategorie")}>
          Add Categorie
        </button>

        <button type="button" onClick={() => this.changeView("Addbrand")}>
          Add Brand
        </button> */}
        <div className="sidenav">
          <a href="#about" onClick={() => this.changeView("all")}>
            List Product
          </a>
          <a href="#services" onClick={() => this.changeView("Addarticle")}>
            Add Product
          </a>
          <a href="#clients" onClick={() => this.changeView("Addcategorie")}>
            Add Categorie
          </a>
          <a href="#contact" onClick={() => this.changeView("Addbrand")}>
            Add Brand
          </a>
        </div>

        {this.renderView()}
      </div>
    );
  }
}
export default Article;
