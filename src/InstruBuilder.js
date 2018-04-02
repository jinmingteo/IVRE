//import React from 'react';
import { connect } from 'react-redux';
import ChartComponent from './ChartComponent.js'

const mapStateToProps = state => {
  return {newCharts: state.instVal};
}

//const mapDispatchToProps = dispatch => { }

export default connect(mapStateToProps)(ChartComponent);
