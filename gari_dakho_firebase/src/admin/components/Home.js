import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: theme.spacing(2),
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return <div className={classes.root}>BODY</div>;
}
