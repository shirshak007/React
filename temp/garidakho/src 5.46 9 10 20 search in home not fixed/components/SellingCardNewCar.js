import React from "react";

import { makeStyles } from "@material-ui/core";
//import axios from "axios"; //if needed
import TopBannerSellingCardNewCar from "./TopBannerSellingCardNewCar";
import FindOffersOnTopBrands from "./FindOffersOnTopBrands";
import SearchCarsByBodyType from "./SearchCarsByBodyType";
import FAQ from "./FAQ";
import LatestCarsSlide from "./LatestCarsSlide";
import SearchNewCarBy from "./SearchNewCarBy";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  typography: {
    margin: theme.spacing(1),

    padding: "10px",
    width: "40%",
    background: "rgba(0, 114, 156, 0.8)",
    color: "white",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      width: "50%",
      fontSize: 22,
    },
  },
}));

export default function SellingCardNewCar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopBannerSellingCardNewCar /> {/*top banner filter component*/}
        <div style={{ width: "100%" }}>
          <LatestCarsSlide />
          {/* <LatestCars /> //this shows a long list so the previous component renders a use friendly slide*/}
          <FindOffersOnTopBrands />
          {/*Child component*/}
          <SearchCarsByBodyType />
          {/*Child Component*/}
          <SearchNewCarBy />
          {/*Child Component*/}
          <FAQ />
          {/*Child Component faq not faqs*/}
        </div>
      </div>
    </div>
  );
}
