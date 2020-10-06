import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.darkBlue,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: theme.palette.background.darkBlue,
    color: "#fff",
  },
  navlink: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

// function func1() {
//   if (document.getElementById("first") === "") {
//     alert("First Name field should not be empty");
//   }
//   if (!isNaN(document.getElementById("first"))) {
//     alert("First Name field should not be numeric");
//   }
//   if (document.getElementById("last") === "") {
//     alert("Last Name field should not be empty");
//   }
//   if (!isNaN(document.getElementById("last"))) {
//     alert("Last Name field should not be numeric");
//   }
// }

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermIdentityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="first"
                label="First Name"
                name="first"
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="last"
                label="Last Name"
                name="last"
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile No"
            name="mobile"
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="City"
                label="City"
                name="City"
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="pin"
                label="PIN Code"
                name="pin"
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <NavLink className={classes.navlink} to="/login" variant="body2">
                {"Already have an account? Login"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
