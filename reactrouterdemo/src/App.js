import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <h2>My Car Showcase</h2>
            <div className="ui menu">
              <div className="item ">
                <Link to={"/"} className="item">
                  {" "}
                  Home{" "}
                </Link>
              </div>
              <div className="item">
                <Link to={"/contact"} className="item">
                  Contact
                </Link>
              </div>
              <div className="item">
                <Link to={"/login"} className="item">
                  Login/Sign Up
                </Link>
              </div>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
