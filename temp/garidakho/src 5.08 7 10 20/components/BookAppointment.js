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
}));

export default function BookAppointment(props) {
  const classes = useStyles();
  //initialization

  //----------------------------------------------------------
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
            <Grid item xs={12} sm={6} lg={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
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
