import React from "react";
import { makeStyles } from "@material-ui/core";
import SellingCardUsedCar from "./SellingCardUsedCar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function UsedCar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SellingCardUsedCar />
    </div>
  );
}
