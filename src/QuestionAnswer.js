import React from "react";
import AppFrame from "./AppFrame";
import { Treemap, Tooltip} from "recharts";
//import { BarChart, Bar } from "recharts";

// const AxisLabel = ({
//   axisType,
//   x = 0,
//   y = 0,
//   width,
//   height,
//   stroke,
//   children
// }) => {
//   const isVert = axisType === "yAxis";
//   const cx = isVert ? x + 20 : x + width / 2;
//   const cy = isVert ? height / 2 + y : y + height;
//   const rot = isVert ? `270 ${cx} ${cy}` : 0;
//   return (
//     <text
//       x={cx}
//       y={cy}
//       transform={`rotate(${rot})`}
//       textAnchor="middle"
//       stroke={stroke}
//     >
//       {children}
//     </text>
//   );
// };
const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const CustomizedContent = React.createClass({
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index % 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={16}
            fillOpacity={0.9}
          >
            {index + 1}
          </text>
          : null
        }
      </g>
    );
  }
});


export default class QuestionAnswer extends React.Component {
  render() {
    console.log("Props within Recharts:");
    console.log(this.props);
    if (this.props.charts.chartType === 'treemap') {
      console.log(this.props.charts.data)
      return (
        <AppFrame>
          <h3>{this.props.charts.title}</h3>
          <Treemap width={730} height={250} data={this.props.charts.data}
            dataKey="size"
            ratio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS}/>}
          >
          <Tooltip/>
          </Treemap>
        </AppFrame>
      );
      }
    }
}

// const mapStateToProps = state => {
//     return {charts : state.val}
// }

// const mapDispatchToProps = dispatch => {}

// const Recharts = connect(
//     mapStateToProps,
// )(RechartsComp)

