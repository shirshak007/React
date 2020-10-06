import React from "react";
import { Route, Switch } from "react-router-dom";
import TopHeader from "./TopHeader";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import SellCar from "./SellCar";
import Login from "./Login";
import GotoTop from "./GotoTop";
import NotFound from "./NotFound";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
import SignUp from "./SignUp";
import Partner from "./Partner";
import FAQS from "./FAQS";
import BlogMain from "./BlogMain";
import ShowSingleCar from "./ShowSingleNewCar";

class App extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newcar" component={NewCar} />
            <Route exact path="/usedcar" component={UsedCar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/sellcar" component={SellCar} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/partner" component={Partner} />
            <Route path="/faqs" component={FAQS} />
            <Route path="/about" component={AboutUs} />
            <Route path="/blog" component={BlogMain} />
            <Route path="/car/:id" component={ShowSingleCar} />
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
