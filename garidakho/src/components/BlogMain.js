import React from "react";
import { makeStyles, Container } from "@material-ui/core";

import BlogTopImage from "../asset/images/pexels-photo-733745.jpeg";
import FeaturedPost from "./FeaturedPost";
import BlogPosts from "./BlogPosts";
/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  blogtop: {
    marginBottom: theme.spacing(2),
    boxShadow: "2px 5px 5px grey",
    padding: theme.spacing(3),
    backgroundImage: `linear-gradient(to bottom right,#ffffff , #ccfff1 )`,
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${BlogTopImage})`,
      backgroundSize: "100vw",
    },
  },

  container: {
    marginTop: theme.spacing(2),
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
}));

export default function BlogMain() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <FeaturedPost />

      <BlogPosts />
    </Container>
  );
}
