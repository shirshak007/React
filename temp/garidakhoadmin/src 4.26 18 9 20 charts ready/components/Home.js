import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return <div className={classes.root}>THIS IS THE BODY</div>;
}
