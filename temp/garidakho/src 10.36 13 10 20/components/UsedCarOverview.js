//child component of showsinglenewcar
import React from "react";

import { makeStyles, Container, Typography, Grid } from "@material-ui/core";

import sellingCarData from "../asset/sellingCarData";

import image1 from "../asset/svg/overview (4).svg";
import image2 from "../asset/svg/overview (5).svg";
import image3 from "../asset/svg/overview (6).svg";
import image4 from "../asset/svg/overview (7).svg";
import image5 from "../asset/svg/overview (8).svg";
import image6 from "../asset/svg/overview (9).svg";

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
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: "#2e2e2e",
  },
  space: {
    //To deal with the row break while shrinking
    color: "white",
    fontSize: 1,
  },
  text: {
    fontFamily: "lato",

    fontSize: 15,
    textAlign: "center",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 10,
    // },
  },
  text2: {
    fontFamily: "lato",

    fontSize: 12,
    textAlign: "center",
    color: "#692600",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 10,
    // },
  },
  grid: {
    flexGrow: 1,
    width: "90%",
  },

  imagebox: {
    width: "60px",
    [theme.breakpoints.down("xs")]: {
      width: "45px",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
  },
}));

export default function NewCarOverview(props) {
  const classes = useStyles();
  console.log("overview of" + props.id);

  return (
    <div className={classes.root}>
      {sellingCarData.map((car) => {
        // if ("/car/" + car.title === props.location.pathname) {
        if (
          car.id === props.id
          /*here goes all the query matching props*/
        ) {
          return (
            <Container key={car.id} className={classes.container}>
              <div className={classes.paper}>
                <Typography className={classes.typography} variant="h5">
                  {car.title} Overview
                </Typography>
              </div>

              <div className={classes.grid}>
                <Grid container spacing={5}>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={image1}
                        alt="mileage"
                      />
                    </div>
                    <Typography className={classes.text2}>
                      Mileage [upto]
                    </Typography>
                    <Typography className={classes.text}>
                      17.0 kmpl {/*will be replaced after getting api*/}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={image2}
                        height={50}
                        width={50}
                        alt="engine"
                      />
                    </div>
                    <Typography className={classes.text2}>
                      Engine [upto]
                    </Typography>
                    <Typography className={classes.text}>
                      1854 cc {/*will be replaced after gwtting api*/}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img className={classes.image} src={image3} alt="BHP" />
                    </div>
                    <Typography className={classes.text2}>BHP</Typography>
                    <Typography className={classes.text}>
                      160{/*will be replaced after gwtting api*/}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={image4}
                        alt="Transmission"
                      />
                    </div>
                    <Typography className={classes.text2}>
                      Transmission
                    </Typography>
                    <Typography className={classes.text}>
                      {car.transmission}{" "}
                      {/*will be replaced after gwtting api*/}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img className={classes.image} src={image5} alt="Seats" />
                    </div>
                    <Typography className={classes.text2}>Seats</Typography>
                    <Typography className={classes.text}>
                      5 {/*will be replaced after gwtting api*/}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    item
                    xs={2}
                    sm={2}
                  >
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={image6}
                        alt="Service Cost"
                      />
                    </div>
                    <Typography className={classes.text2}>
                      Service Cost
                    </Typography>
                    <Typography className={classes.text}>
                      6000/year {/*will be replaced after gwtting api*/}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Container>
          );
        }
        return "";
      })}
    </div>
  );
}
