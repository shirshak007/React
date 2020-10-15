import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";
import SEOSingleRowEditPage from "./SEOSingleRowEditPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div></div>
      </div>
    );
  }
}

export default App;
