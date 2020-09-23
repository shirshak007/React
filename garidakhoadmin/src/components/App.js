import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
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
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
