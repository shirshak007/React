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
import TermsAndCondition from "./TermsAndCondition";
import Disclaimer from "./Disclaimer";
import SignUp from "./SignUp";
import Partner from "./Partner";
import StoreLocator from "./StoreLocator";
import FAQS from "./FAQS";
import BlogMain from "./BlogMain";
import ShowSingleNewCar from "./ShowSingleNewCar";
import AccountActivation from "./childcomponents/AccountActivation";
import ShowSingleUsedCarSearch from "./ShowSingleUsedCarSearch";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordResetPage from "./ForgotPasswordResetPage";
// import { Helmet } from "react-helmet";
import AdminHome from "../admin/components/AdminHome";
import AdminLogin from "../admin/components/AdminLogin";

export default function App() {
  return (
    <div>
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ||
      window.location.pathname === "/adminlogin" ? (
        ""
      ) : (
        <TopHeader />
      )}
      {/*Fixed top header-- not sticky*/}
      {/*checking if admin access then hide header*/}
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ||
      window.location.pathname === "/adminlogin" ? (
        ""
      ) : (
        <Header />
      )}
      {/*Fixed header --sticky*/}
      <div>
        <Switch>
          {/*All routing happens here*/}
          <Route exact path="/" component={Home} />
          <Route path="/newcar" component={NewCar} />
          <Route path="/usedcar" component={UsedCar} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/sellcar" component={SellCar} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/support" component={ContactUs} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsAndCondition} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/partner" component={Partner} />
          <Route path="/storelocator" component={StoreLocator} />
          <Route path="/faqs" component={FAQS} />
          <Route path="/blog" component={BlogMain} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          {/* <Route path="/resetpassword/:token" component={ForgotPasswordResetPage} /> */}
          <Route
            path="/resetpassword/:token/:email"
            render={(props) => <ForgotPasswordResetPage {...props} />}
          />
          <Route path="/car/:id" component={ShowSingleNewCar} />
          <Route path="/oldcar/:id" component={ShowSingleUsedCarSearch} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/adminhome" component={AdminHome} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route
            path="/account_activate/:token/:email"
            component={AccountActivation}
          />
          <Route path="*" component={NotFound} />
          {/*When user types invalid url*/}
          {/* <Route path="/car/:id" component={Car} /> if we use router for each car, then use this*/}
        </Switch>
      </div>
      {window.location.pathname === "/adminhome" ||
      window.location.pathname === "/admin" ||
      window.location.pathname === "/adminlogin" ? (
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
