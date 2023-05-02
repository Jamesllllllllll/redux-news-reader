import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./app/App";
import store from "./app/store";
import { Provider } from "react-redux";

// const { worker } = require('./mocks/browser');
// worker.start();

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
const container = document.getElementById("root");
const root = createRoot(container);
root.render(

    <Provider store={store}>
      <App />
    </Provider>

);
*/