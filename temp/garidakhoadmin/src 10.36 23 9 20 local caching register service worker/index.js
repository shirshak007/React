import React from "react";
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

/*
ReadMe
Pre-Caching the webcontent using react-snap
code is always changing so before serve do this
npm install
npm run build
npm install -g serve(is serve not installed)
serve -s build
it will run in localhost:5000
*/
