import React from "react";
import { makeStyles } from "@material-ui/core";

import SellingCard from "./SellingCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SellingCard />
    </div>
  );
}
