import React from "react";

import {
  makeStyles,
  useTheme,
  Typography,
  Container,
  Grid,
  fade,
  TextField,
  Paper,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Autocomplete from "@material-ui/lab/Autocomplete";
import cars from "../asset/carData";

import Image from "../asset/svg/customer-are-agree.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(10),
    justifyContent: "center",
    width: "100%",
  },

  container: {
    marginTop: theme.spacing(2),
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "aliceblue",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    /*contain= Resize the background image to make sure the 
    image is fully visible
    cover=	Resize the background image to cover the entire container, even 
    if it has to stretch the image or cut a little bit off one of the edges*/
    backgroundPosition: "right",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  options: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: "black",
    fontSize: 50,
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      fontSize: 32,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  grid: {
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  gridpaper: {
    /*Change the height and width here to reflect changes */
    height: 55,
    width: 265,
  },
  control: {
    padding: theme.spacing(2),
  },
  imagebox: {
    width: "100%",

    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
  },
}));

export default function SellCarSingleVisit() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root} maxWidth="lg">
      <div className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.typography}>
            SELL CAR IN SINGLE VISIT
          </Typography>
        </div>
      </div>

      <div className={classes.options}>
        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Autocomplete
                      id="Brand"
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      options={cars}
                      getOptionLabel={(option) => option.brand}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Search Brand ... "
                          variant="outlined"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </Paper>
              </Grid>

              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Autocomplete
                      id="model"
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      options={cars}
                      getOptionLabel={(option) => option.model}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Search Model ... "
                          variant="outlined"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Autocomplete
                      id="Year"
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      options={cars}
                      getOptionLabel={(option) => option.year}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Year ... "
                          variant="outlined"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Autocomplete
                      id="variant"
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      options={cars}
                      getOptionLabel={(option) => option.variant}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Variant ... "
                          variant="outlined"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Autocomplete
                      id="regstate"
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      options={cars}
                      getOptionLabel={(option) => option.regstate}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Registration State ... "
                          variant="outlined"
                          color="secondary"
                        />
                      )}
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <div
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                    />
                    <TextField
                      style={{
                        width: "100%",
                        background: fade(theme.palette.common.white, 0.5),
                      }}
                      id="mobile"
                      label="Mobile No ... "
                      variant="outlined"
                      color="secondary"
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <div
                      style={{
                        width: "100%",

                        background: fade(theme.palette.common.white, 0.5),
                      }}
                    />
                    <Button
                      style={{
                        minWidth: "100%",
                        minHeight: "100%",
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      Get Price
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
