import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import SearchCar from "./SearchCar";
// import SearchNewCarBy from "./SearchNewCarBy";
// import FeaturedCars from "./FeaturedCars";
import WebSearch from "../asset/svg/undraw_web_search_eetr.svg";
// import Slideshow from "./Slideshow";
import ThreeDSlideshow from "./3dSlideshow";
import SellCar from "./SellCar";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchComp: {
    display: "flex",
    flexDirection: "row",
  },
  WebSearchImage: {
    width: "25%",
    paddingRight: 25,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  typography: {
    color: theme.palette.background.darkBlue,
    textDecoration: "inherit",
  },
  sellCar: {
    padding: 10,
  },
  gotoSell: {
    marginLeft: 140,
    [theme.breakpoints.down("sm")]: {
      margin: "25px auto 0 auto",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchComp}>
        <SearchCar />
        <CSSTransition in={true} timeout={300}>
          <img
            className={classes.WebSearchImage}
            src={WebSearch}
            alt="web-search"
          />
        </CSSTransition>
      </div>

      <div className={classes.gotoSell}>
        <Typography variant="h6">
          Want sell your Old Car ?{" "}
          <NavLink className={classes.typography} to="/sellcar">
            Click here
          </NavLink>
        </Typography>
      </div>
      {/* <Slideshow /> //Added new 3d slideshow*/}

      <ThreeDSlideshow />
      <SellCar />
    </div>
  );
}
