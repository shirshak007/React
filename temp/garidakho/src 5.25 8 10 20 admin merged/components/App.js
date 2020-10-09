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
import ShowSingleNewCar from "./ShowSingleNewCar";
import ForgotPassword from "./ForgotPassword";
// import { Helmet } from "react-helmet";
import * as AdminIndex from "../admin/index";
import AdminHome from "../admin/components/AdminHome";
import AdminLogin from "../admin/components/AdminLogin";

export default function App() {
  return (
    <div>
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ? (
        ""
      ) : (
        <TopHeader />
      )}
      {/*Fixed top header-- not sticky*/}
      {/*checking if admin access then hide header*/}
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ? (
        ""
      ) : (
        <Header />
      )}
      {console.log(window.location.pathname)}
      {/*Fixed header --sticky*/}
      <div>
        <Switch>
          {/*All routing happens here*/}
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
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/car/:id" component={ShowSingleNewCar} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/adminhome" component={AdminHome} />
          <Route path="*" component={NotFound} />
          {/*When user types invalid url*/}
          {/* <Route path="/car/:id" component={Car} /> if we use router for each car, then use this*/}
        </Switch>
      </div>
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ? (
        ""
      ) : (
        <Footer />
      )}{" "}
      {/*Fixed footer*/}
      <GotoTop />
      {/*goto top Button for navigation*/}
    </div>
  );
}
