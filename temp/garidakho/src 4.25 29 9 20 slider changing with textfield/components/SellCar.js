import React from "react";
import { makeStyles } from "@material-ui/core";
import SellCarThreeSteps from "./SellCarThreeSteps";
import WhyChooseUs from "./WhyChooseUs";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SellCarThreeSteps />
      <WhyChooseUs />
    </div>
  );
}
