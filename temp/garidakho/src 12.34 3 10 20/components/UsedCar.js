import React from "react";
import { makeStyles } from "@material-ui/core";
import SellingCardUsedCar from "./SellingCardUsedCar";

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
      <SellingCardUsedCar />
    </div>
  );
}
