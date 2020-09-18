import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

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
  search: {
    padding: theme.spacing(5),
  },
  text: {
    margin: theme.spacing(1),
    color: "white",
  },
}));

export default function NewCar() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} component="h1" variant="h5">
          NEWS
        </Typography>
      </div>
    </Container>
  );
}
