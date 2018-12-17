import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// this isn't connecting and I am not sure why not 
import "../src/index.js";

// to render a React element into a root DOM node, pass both to ReactDOM.render()
ReactDOM.render(
  <App />,
  // when root is called everything inside it will be managed by React DOM
  document.getElementById("root"));