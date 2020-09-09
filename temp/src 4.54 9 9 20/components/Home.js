import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchCar from "./SearchCar";
import SearchNewCarBy from "./SearchNewCarBy";
import FeaturedCars from "./featuredCars";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchCar />
      <SearchNewCarBy />
      <FeaturedCars />
    </div>
  );
}
