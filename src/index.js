import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Typography } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));


const NotFound = () => {
  return (
    <Typography variant="h3" align="center">
      Sorry the page can't be loaded!
      <Typography variant="h5">
        Contact the site's administrator or support for assistance.
      </Typography>
    </Typography>
  );
};

if (window.self === window.top) {
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
} else {
  root.render(<NotFound />);
}
