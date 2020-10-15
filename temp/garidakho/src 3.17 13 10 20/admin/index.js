import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";

export default function index() {
  return (
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  );
}
