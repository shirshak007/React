import React from "react";

import { NavLink } from "react-router-dom";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CardContent from "@material-ui/core/CardContent";
import Theme from "./Theme";
import sellingCarData from "../asset/sellingCarData";
import "../asset/ribbon.css";

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
    color: Theme.palette.background.darkGreen,
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
  },
  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  ribbontext: {
    fontFamily: "lato",
    fontSize: 12,
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    width: "100%",
  },
  grid: {
    flexGrow: 1,
  },

  link: {
    color: "black",
    textDecoration: "inherit",
  },
  card: {
    width: 380,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  media: {
    width: "100%",
    height: 240,
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  imagebox: {
    width: "100%",
    height: "100%",
    /*change the height always 30-40 pixex less than gridpaper. It contains the title of image*/
    flexDirection: "row",
    alignItems: "center",
    position: "relative",

    background: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
}));

export default function SellingCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h6">
          CHECK OUT OUR CARS
        </Typography>
      </div>

      <div>
        <Grid container justify="center" spacing={5}>
          {sellingCarData.map((car) => (
            <Grid key={car.img} item>
              <NavLink to="/" className={classes.navlink}>
                <Card className={classes.card}>
                  <Paper className={classes.media}>
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={car.img}
                        alt={car.title}
                      />
                      <div className="ribbon ribbon-top-left">
                        <span>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CheckCircleIcon className={classes.ribbontext} />
                            <Typography className={classes.ribbontext}>
                              MONEYBACK
                            </Typography>
                          </div>
                        </span>
                      </div>
                    </div>
                  </Paper>

                  <CardContent>
                    <Typography
                      className={classes.cardtypography}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      {car.title}
                      {bull} ₹{car.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {car.distance}
                      {bull}
                      {car.fuel}
                      {bull}
                      {car.owner}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
