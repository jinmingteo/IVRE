import React from "react";
//import { render } from "react-dom";
import AppFrame from "./AppFrame";
//import Dashboard from "react-dazzle";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  //BarChart,
  Tooltip,
  Legend
} from "recharts";
//import Victory from "./Victory";
//import { compose } from "redux";
import { connect } from "react-redux";

class RechartsComp extends React.Component {
  render() {
    return (
      <AppFrame>
        <LineChart
          width={400}
          height={400}
          data={this.props.charts.Recharts.level}
        >
          <Line type="monotone" dataKey="counter" stroke="#8884d8" />
          <XAxis dataKey="level" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </LineChart>

        <PieChart width={800} height={400}>
          <Pie
            data={this.props.charts.Recharts.data01}
            cx={200}
            cy={200}
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={this.props.charts.Recharts.data02}
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </AppFrame>
    );
  }
}

const mapStateToProps = state => {
  return { charts: state.val };
};

//const mapDispatchToProps = dispatch => {};

const Recharts = connect(mapStateToProps)(RechartsComp);

export default Recharts;
