import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme";
import App from "./App";
import Demo from "./Demo";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Demo />
  </ThemeProvider>,

  document.querySelector("#root")
);
