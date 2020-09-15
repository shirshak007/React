import React from "react";
import { makeStyles } from "@material-ui/core";

import SellCarSingleVisit from "./SellCarSingleVisit";
import WhyChooseUs from "./WhyChooseUs";
import SeeHowThisWork from "./SeeHowThisWork";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SellCarSingleVisit />
      <WhyChooseUs />
      <SeeHowThisWork />
    </div>
  );
}
