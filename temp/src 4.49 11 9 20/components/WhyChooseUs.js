import React from "react";

import { makeStyles, Container, Typography, Grid } from "@material-ui/core";

import Theme from "./Theme";

import image1 from "../asset/svg/car1.svg";
import image2 from "../asset/svg/car2.svg";
import image3 from "../asset/svg/car3.svg";
import image4 from "../asset/svg/car4.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },

  text: {
    fontFamily: "lato",
    padding: theme.spacing(2),
    fontSize: 14,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  grid: {
    flexGrow: 1,
  },

  imagebox: {
    width: "100%",

    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  image: {
    width: "100%",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
  },
}));

export default function WhyChooseUs(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h6">
          WHY CHOOSE US?
        </Typography>
      </div>

      <div className={classes.grid}>
        <Grid container spacing={10}>
          <Grid item xs={3} sm={3}>
            <div className={classes.imagebox}>
              <img
                className={classes.image}
                src={image1}
                alt="image_evaluation"
              />
              <Typography className={classes.text}>
                Sell Car In One Visit
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div className={classes.imagebox}>
              <img
                className={classes.image}
                src={image2}
                alt="image_evaluation"
              />
              <Typography className={classes.text}>Best Car Price</Typography>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div className={classes.imagebox}>
              <img
                className={classes.image}
                src={image3}
                alt="image_inspection"
              />
              <Typography className={classes.text}>Instant Payment</Typography>
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={image4} alt="image_deal" />
              <Typography className={classes.text}>Free RC transfer</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
