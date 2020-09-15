import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
