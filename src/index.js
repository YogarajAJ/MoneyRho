import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./scss/index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

let theme = createTheme({
  palette: {
    primary: {
      light: "#FF4A17",
      main: "#FF4A17",
      dark: "#FF4A17",
      contrastText: "#000",
    },
    secondary: {
      light: "#F4F6FA",
      main: "#ff753a",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  components:{
    MuiSelect:{
      styleOverrides:{
        icon:'#fff'
      }
    }
  }
});

theme = responsiveFontSizes(theme);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
