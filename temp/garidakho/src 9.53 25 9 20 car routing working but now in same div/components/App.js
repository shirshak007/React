import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import SellCar from "./SellCar";
import News from "./News";
import Car from "./Car";
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
            <Route exact path="/sellcar" component={SellCar} />
            <Route exact path="/" component={Home} />
            <Route path="/car/:id" component={Car} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
