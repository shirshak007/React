import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/adminhome" component={AdminHome} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
