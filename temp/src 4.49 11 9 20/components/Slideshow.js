import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles, Typography, Paper, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import Theme from "./Theme";
import slideData from "../asset/slideData";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  slidepaper: {
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  typography: {
    marginTop: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  navlink: {
    color: "black",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  slidetext: {
    padding: theme.spacing(0, 1),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: "75%",

    flexDirection: "column",

    justifyContent: "center",
  },

  imagebox: {
    width: 900,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 280,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 140,
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function Slideshow(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          LATEST ARRIVAL
        </Typography>
      </div>
      <div className={classes.center}>
        <div className={classes.slide}>
          <Slide duration={1500}>
            {slideData.map((slide) => (
              <NavLink key={slide.title} className={classes.navlink} to="/">
                <Paper className={classes.slidepaper}>
                  <div className={classes.imagebox}>
                    <img
                      className={classes.image}
                      src={slide.img}
                      alt={slide.title}
                    />
                  </div>
                  <div className={classes.slidetext}>
                    <Typography variant="h5">{slide.title}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {slide.desc}
                    </Typography>
                  </div>
                </Paper>
              </NavLink>
            ))}
          </Slide>
        </div>
      </div>
    </Container>
  );
}
