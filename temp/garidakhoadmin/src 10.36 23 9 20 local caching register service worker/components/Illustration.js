import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import image2 from "../asset/images/undraw_teaching_f1cm.svg";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  imagebox: {
    height: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ILLUSTRATIONS
        </Typography>
        <div className={classes.imagebox}>
          <img className={classes.image} src={image2} alt={image2} />
          Add some quality, svg illustrations to your project courtesy of
          unDraw, a constantly updated collection of beautiful svg images that
          you can use completely free and without attribution!
        </div>
      </div>
    </div>
  );
}
