import React from "react";
import { Route, Switch } from "react-router-dom";

import { Fab } from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import SellCar from "./SellCar";
import News from "./News";
import NotFound from "./NotFound";
// import Car from "./Car";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHide: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    let { isHide } = this.state;
    window.scrollY > 1500
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleClickGotoTop() {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  }
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
            <Route path="*" component={NotFound} />
            {/* <Route path="/car/:id" component={Car} /> */}
          </Switch>
        </div>

        <Footer />
        {this.state.isHide ? (
          <Fab
            className="fab"
            size="small"
            style={{
              margin: "0px",
              top: "auto",
              right: "20px",
              bottom: "20px",
              left: "auto",
              position: "fixed",
            }}
            onClick={this.handleClickGotoTop}
            aria-label="gototop"
          >
            <ArrowUpwardIcon />
          </Fab>
        ) : null}
      </div>
    );
  }
}

export default App;
