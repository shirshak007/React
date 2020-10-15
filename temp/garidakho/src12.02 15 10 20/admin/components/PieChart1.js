import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { resources as data } from "../asset/ChartData";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };

  render() {
    const { data: chartData } = this.state;
    console.log(chartData);
    return (
      <div className="chart">
        <Line
          data={chartData[0]}
          options={{
            title: {
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
