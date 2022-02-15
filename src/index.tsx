import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import { App } from "./components/App";
import "./style.css";

const rootElement = document.getElementById("app");
const { store, persistor } = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App test="Test" />
    </PersistGate>
  </Provider>
  , rootElement
);