import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { hydrate, render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Theme from "./components/Theme";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
    rootElement
  );
} else {
  render(
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
    rootElement
  );
}
registerServiceWorker();
