/*Child component of sellcar*/

import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";

import SelectBrand from "./SelectBrand";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    background: theme.palette.background.darkBlue,
    color: "#fff",
  },
  contain: {
    width: "55%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button: {
    margin: theme.spacing(3, 0, 2, 0),
    color: "white",
    backgroundColor: "#298a43",
    "&:hover": {
      backgroundColor: "#00698c",
    },
  },
}));

export default function BookAppointment(props) {
  const classes = useStyles();
  //Getting the values of text fields
  const [Brand, setBrand] = useState("");
  const handleChangeBrand = (newBrand) => {
    setBrand(newBrand);
  };
  console.log(Brand);
  return (
    <div className={classes.root}>
      <div className={classes.contain}>
        <Typography
          style={{ textAlign: "center", color: "#036954" }}
          variant="h5"
        >
          BOOK APPOINTMENT
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={1}>
            {/*--------------------------Name----------------------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
              />
            </Grid>
            {/*------------------------------Brand---------------------*/}
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              item
              xs={12}
              sm={6}
              lg={6}
            >
              <div>
                <SelectBrand
                  onchangebrand={(e) => {
                    handleChangeBrand(e);
                  }}
                />
              </div>
            </Grid>
            {/*--------------------------Model-----------------------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="model"
                label="Model"
                name="model"
              />
            </Grid>
            {/*-------------------------Registration year-----------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="year"
                label="Registration Year"
                name="year"
              />
            </Grid>
            {/*-----------------------Email-------------------------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
            </Grid>
            {/*----------------------Phone no-----------------------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone No"
                name="phone"
              />
            </Grid>
            {/*---------------------------------DOB-----------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="dob"
                label="Date of Birth"
                name="dob"
              />
            </Grid>
            {/*---------------------SUBMIT----------------------------*/}
            <Grid item xs={12} sm={6} lg={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
