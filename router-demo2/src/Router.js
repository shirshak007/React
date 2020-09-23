import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Car from "./components/Car";
class Router extends React.Component {
  state = {
    selected: "",
  };
  render() {
    const { selected } = this.state;
    return (
      <div className="ui container segment">
        <BrowserRouter>
          <div className="ui container segment">
            <h2 className="ui header">My Car Showcase</h2>

            <div className="ui top attached tabular menu">
              <div className="item">
                <Link
                  to={"/"}
                  className={selected === "home" ? "item active" : "item"}
                  onClick={() => this.setState({ selected: "home" })}
                >
                  Home
                </Link>
              </div>
              <div className="item">
                <Link
                  to={"/contact"}
                  className={selected === "contact" ? "item active" : "item"}
                  onClick={() => this.setState({ selected: "contact" })}
                >
                  Contact
                </Link>
              </div>
              <div className="ui item">
                <Link
                  to={"/login"}
                  className={selected === "login" ? "item active" : "item"}
                  onClick={() => this.setState({ selected: "login" })}
                >
                  Login/Sign Up
                </Link>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/car/:id" component={Car} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
