import React from 'react';
import QuestionAnswer from './QuestionAnswer.js'

export default class QA extends React.Component {
     constructor(props) {
      super(props);
      //this.state = this.props
      this.rechartsArr = [];

      var ind=0;

      for(var key in props.newCharts){
        if (this.props.newCharts[key].style ==='recharts'){
          this.rechartsArr[ind]=this.props.newCharts[key]
          ind=ind+1
        }
      }
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.props = newProps
      var ind = 0;
      var vic=0;
      console.log("newstuff");
      console.log(this.props.newCharts);
      for (var key in this.props.newCharts) {
        if (this.props.newCharts[key].style ==='recharts'){
          this.rechartsArr[ind]=this.props.newCharts[key]
          ind=ind+1
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
          this.rechartsArr.map(function(chart, index){
          // Adding each chart from passed in data. 
          return <QuestionAnswer key={index} charts={chart} />;
        })
      }
      </div>
    )
}
}