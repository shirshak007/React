import React from "react";
import { makeStyles, Divider, Typography, Grid } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import BlogTopImage from "../asset/images/pexels-photo-733745.jpeg";
/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  blogtop: {
    marginBottom: theme.spacing(2),
    boxShadow: "2px 5px 5px grey",
    padding: theme.spacing(3),
    backgroundImage: `linear-gradient(to bottom right,#ffffff , #000000 )`,
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${BlogTopImage})`,
      backgroundSize: "100vw",
    },
  },
  container: {
    marginBottom: theme.spacing(2),
  },
  typography: {
    margin: theme.spacing(1),
    color: "black",
  },

  text: {
    margin: theme.spacing(1),
    color: "white",
  },
  blogtopright: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffc800",
  },
  imagebox: {
    width: "90%",

    background: "#ffc800",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  image: {
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "99%",
    height: "auto",
  },
}));
//This file is one post that is featured at the top of blog page
export default function FeaturedPost() {
  const classes = useStyles();

  return (
    <div className={classes.blogtop}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "#ffc800",
          }}
        >
          <div style={{ padding: "20px" }}>
            <Typography
              className={classes.typography}
              style={{
                fontFamily: "Courier Prime",
              }}
            >
              Featured Post
            </Typography>
            <Typography
              className={classes.typography}
              style={{ fontSize: 40, fontFamily: "Abril Fatface" }}
            >
              This is a new Blog Post
            </Typography>

            <Divider variant="middle" style={{ height: "5px" }} />
            <Typography
              style={{
                textAlign: "justify",
                padding: "10px",
                fontSize: 18,
                fontFamily: "Josefin Sans",
              }}
            >
              About Blog Motor Trend Magazine, the world's automotive authority.
              Covers more cars, trucks & SUVs than any other magazine. Provides
              extensive automobile buying guide for consumers. The official
              Motor Trend magazine web site featuring the latest new cars, car
              reviews and news, concept cars and auto show coverage, awards, and
              much more.
              <br />
              <NavLink
                to="/blog"
                style={{ color: "darkcyan", textDecoration: "inherit" }}
              >
                Read More...
              </NavLink>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <div className={classes.blogtopright}>
            <div className={classes.imagebox}>
              <img
                alt="Feature post"
                className={classes.image}
                width="960"
                height="200"
                src={BlogTopImage}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
