import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import Theme from "./Theme";
import slideData from "../asset/slideData";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  typography: {
    marginTop: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  navlink: {
    color: "black",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
  },
  slidetext: {
    padding: theme.spacing(0, 1),
  },
  slide: {
    width: "75%" /*Change dimension here to resize slide image*/,
  },

  imagebox: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
}));

export default function Slideshow(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          LATEST ARRIVAL
        </Typography>
      </div>
      <Slide duration={1500} className={classes.slide}>
        {slideData.map((slide) => (
          <NavLink key={slide.title} className={classes.navlink} to="/">
            <Paper className={classes.paper}>
              <div className={classes.imagebox}>
                <img
                  className={classes.image}
                  src={slide.img}
                  alt={slide.title}
                />
              </div>
              <div className={classes.slidetext}>
                <Typography variant="h5">{slide.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {slide.desc}
                </Typography>
              </div>
            </Paper>
          </NavLink>
        ))}
      </Slide>
    </div>
  );
}
