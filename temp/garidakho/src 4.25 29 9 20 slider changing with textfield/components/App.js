import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import SellCar from "./SellCar";
import News from "./News";
import GotoTop from "./GotoTop";
import NotFound from "./NotFound";
// import Car from "./Car";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newcar" component={NewCar} />
            <Route exact path="/usedcar" component={UsedCar} />
            <Route exact path="/news" component={News} />
            <Route exact path="/sellcar" component={SellCar} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="*" component={NotFound} />{" "}
            {/*When user types invalid url*/}
            {/* <Route path="/car/:id" component={Car} /> if we use router for each car, then use this*/}
          </Switch>
        </div>

        <Footer />
        <GotoTop />
        {/*Botton for navigation*/}
      </div>
    );
  }
}

export default App;
