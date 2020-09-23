import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import App from "./components/App";
import AdminHome from "./components/AdminHome";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path="/adminhome" component={AdminHome} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);

/*
// ReadMe
// if Pre-Rendering the webcontent using react-snap
// comment out the whole upper part and use the below code
// code is always changing so before serve do this
// npm install
// npm run build
// npm install -g serve(is serve not installed)
// serve -s build
// it will run in localhost:5000

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



*/
