import React from 'react';
import { connect } from 'react-redux';
//import stuRecharts from './stuRecharts.js';
import Recharts from './RechartsChart.js';

class ExampleComponent extends React.Component {
     constructor(props) {
      super(props);
      //this.state = this.props
      this.chartsArr = [];
      //console.log('Props-')
      // console.log("hi");
      console.log(this.props.newCharts);
      var ind=0
      for(var key in props.newCharts){
      console.log('within loop')
      console.log(key, props.newCharts[key])
      if(this.props.newCharts[key].style ==='recharts')
      this.chartsArr[ind]=this.props.newCharts[key]
      ind=ind+1
      }
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      var ind = 0
      for (var key in this.props.newCharts) {
        if (this.props.newCharts[key].style === 'recharts') {
          this.chartsArr[ind] = this.props.newCharts[key]
          ind = ind + 1
        }
      }
    }
  }
  
  componentDidMount(){
    console.log("mounted");
  }

  render(){
    return(
      <div>{
        this.chartsArr.map(function(chart, index){
          // Adding each chart from passed in data. 
          return <Recharts key={index} charts={chart} />;
        })
      }</div>
    )
}
}

const mapStateToProps = state => {
  return {newCharts: state.stuVal};
}

//const mapDispatchToProps = dispatch => { }


export default connect(mapStateToProps)(ExampleComponent);
