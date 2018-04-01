import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./Router";
import firebase from "firebase";
//import AppFrame from "./AppFrame";
//import Dashboard from "react-dazzle";
//import {
  //PieChart,
  //Pie,
  //LineChart,
  //Line,
  //XAxis,
  //YAxis,
  //CartesianGrid,
  //BarChart,
  //Tooltip,
  //Legend
//} from "recharts";
//import Victory from "./Victory";
import { Provider } from "react-redux";
import store from "./store";
//const {XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// CHANGE HERE

var config = {
    apiKey: "AIzaSyB25jkNH3gfUookjihh_C8wAGUJGNpeelI",
    authDomain: "ivre-6cd52.firebaseapp.com",
    databaseURL: "https://ivre-6cd52.firebaseio.com",
    projectId: "ivre-6cd52",
    storageBucket: "ivre-6cd52.appspot.com",
    messagingSenderId: "349652609210"
};

try {
  firebase.initializeApp(config);
} catch (error) {}

var db = firebase.database();
db.ref("/").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    console.log('dispatched & displaying getstate:')
    console.log(store.getState());
  }
});

db.ref("/newCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    console.log("dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

db.ref("/stuCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_STU_VAL", payload: data.val() });
    console.log("student dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//provider let CONTAINERS connect to the store....

//render(<App />, document.getElementById('root'));
