import React, { Component, PropTypes } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.chartData,
      displayTitle: true,
      displayLegend: true,
      legendPosition: "right",
      products: "Product"
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.state.displayTitle,
              text: "statistic of  " + this.state.products,
              fontSize: 25
            },
            legend: {
              display: this.state.displayLegend,
              position: this.state.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.state.displayTitle,
              text: "statistic of " + this.state.products,
              fontSize: 25
            },
            legend: {
              display: this.state.displayLegend,
              position: this.state.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.state.displayTitle,
              text: "statistic of " + this.state.products,
              fontSize: 25
            },
            legend: {
              display: this.state.displayLegend,
              position: this.state.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
