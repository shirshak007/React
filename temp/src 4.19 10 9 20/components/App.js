import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import News from "./News";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/newcar" component={NewCar} />
            <Route exact path="/usedcar" component={UsedCar} />
            <Route exact path="/news" component={News} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
