import React from "react";

// import TextField from "@material-ui/core/TextField";

import { makeStyles, Container, Typography } from "@material-ui/core";

import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: "300px",
    background: "#0f0f0f",
    // backgroundImage: `url(${"../asset/background.jpg"})`,
  },
  typography: {
    margin: theme.spacing(1),
    color: "white",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} component="h1" variant="h5">
          FIND THE RIGHT CAR
        </Typography>
      </div>
      <br />
      <br />

      <SearchBar placeholder="Search Cars Here" />
    </Container>
  );
}
