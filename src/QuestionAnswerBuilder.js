//import React from 'react';
import { connect } from 'react-redux';
import QuestionAnswer from './QuestionAnswerComp.js'

const mapStateToProps = state => {
  return {newCharts: state.ansVal}; //tochange
}

//const mapDispatchToProps = dispatch => { }

export default connect(mapStateToProps)(QuestionAnswer);
