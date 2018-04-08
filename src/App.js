import React from 'react';
//import { render } from 'react-dom';
import AppFrame from './AppFrame'
import "./app.css"

class App extends React.Component{
  render(){
    return(
      <div>
      <AppFrame>
      <h1> Integrated Virtual Reviewing Environment (IVRE) </h1>
      <h3><i> A platform for students and instructors to review their educational progress. </i></h3>
      </AppFrame>
      </div>
    )
  }
}

export default App;


