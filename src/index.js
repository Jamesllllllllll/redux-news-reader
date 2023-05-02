import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import store from "./app/store";
import { Provider } from "react-redux";

// const { worker } = require('./mocks/browser');
// worker.start();

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(

    <Provider store={store}>
      <App />
    </Provider>

);
