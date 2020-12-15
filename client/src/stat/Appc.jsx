import React, { Component } from "react";
import Chart from "./components/Chart.jsx";
import $ from "jquery";

class Appc extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      loading: false
    };
    this.getChartData = this.getChartData.bind(this);
  }

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    console.log("zzz", this.props.label, this.props.data);
    let label = [];
    let x = [];
    $.get("/api/stat").done((data) => {
      for (var i = 0; i < data.length; i++) {
        label.push(data[i]["_id"]);
        x.push(data[i]["total"]);
      }
      console.log(x, label);
      this.setState({
        label: label,
        data: x
      });
      this.setState({
        loading: true,
        chartData: {
          labels: label,
          datasets: [
            {
              label: "Product",
              // data: [617594, 181045, 153060, 106519, 105162, 95072]
              data: x,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
            }
          ]
        }
      });
    });

    //   success: (data) => {

    //     console.log(label, x);
    //   },
    //   error: (er) => console.log(er)
    // });
  }

  render() {
    return (
      <div className="Appc">
        <div className="Appc-header">
          <h2>Static of Articles</h2>
        </div>
        {this.state.loading && (
          <Chart
            chartData={this.state.chartData}
            location="Massachusetts"
            legendPosition="bottom"
          />
        )}
      </div>
    );
  }
}

export default Appc;
