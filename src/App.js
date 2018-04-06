import React from 'react';
//import { render } from 'react-dom';
import AppFrame from './AppFrame'

class App extends React.Component{
  render(){
    return(
      <div>
      <AppFrame>
      <h1> Welcome to Integrated Virtual Reviewing Environment (IVRE) </h1>
      <h2><i> A platform for students and instructors to review their educational progress. </i></h2>

      </AppFrame>
      </div>
    )
  }
}

export default App;


