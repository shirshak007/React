import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SellCarThreeSteps from "./SellCarThreeSteps";
import WhyChooseUs from "./WhyChooseUs";
import SelectBrand from "./SelectBrand";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function Home(props) {
  const classes = useStyles();
  const [Brand, setBrand] = useState("");

  const handleChangeBrand = (newBrand) => {
    setBrand(newBrand);
  };
  console.log(Brand);
  return (
    <div className={classes.root}>
      <br />

      <div className={classes.contain}>
        <form className={classes.form}>
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
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

              <SelectBrand
                onchangebrand={(e) => {
                  handleChangeBrand(e);
                }}
              />

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
            <Grid item sm={12} lg={6}>
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
      <SellCarThreeSteps />
      <WhyChooseUs />
    </div>
  );
}
