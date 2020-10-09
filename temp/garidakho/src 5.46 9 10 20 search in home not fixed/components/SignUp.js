import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";
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
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
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
  //put these values into database
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [PIN, setPIN] = useState("");
  const [Password, setPassword] = useState("");
  const handleChangePassword = (value) => {
    setPassword(value);
  };
  console.log(FirstName, LastName, Email, Mobile, City, PIN);
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
                value={FirstName}
                id="first"
                label="First Name"
                name="first"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                value={LastName}
                fullWidth
                id="last"
                label="Last Name"
                name="last"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Mobile}
            id="mobile"
            label="Mobile No"
            name="mobile"
            onChange={(e) => setMobile(e.target.value)}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Email}
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                value={City}
                id="City"
                label="City"
                name="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                value={PIN}
                id="pin"
                label="PIN Code"
                name="pin"
                onChange={(e) => setPIN(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Password}
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => handleChangePassword(e.target.value)}
            autoComplete="current-password"
          />
          {/*--------------------------Password checking----------------------------*/}
          <div>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must be 8 character long" />
                <ListItemIcon>
                  {/*---------------------checking password length--------------------*/}
                  {Password.length >= 8 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one uppercase letter" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one upper case------------------*/}
                  {Password.toLowerCase() !== Password &&
                  Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one lowercase letter" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one upper case------------------*/}
                  {Password.toUpperCase() !== Password &&
                  Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one number" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one number using regular expression------------------*/}
                  {Password.match(/\d+/g) && Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
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
