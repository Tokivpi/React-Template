import React from "react";
import ReactDOM from "react-dom/client";
// router
import { HashRouter } from "react-router-dom";
// store
import { Provider } from "react-redux";
import store from "@/store";
// reset static resources
import "normalize.css";
import "./assets/css/index.less";

import App from "@/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Provider>
);
