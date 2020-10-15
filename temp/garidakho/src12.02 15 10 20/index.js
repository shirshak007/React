import React from "react";

import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
