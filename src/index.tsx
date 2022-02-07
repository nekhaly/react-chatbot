import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./components/App";
import "./style.css";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App test="Test" />
  </Provider>
  , rootElement
);