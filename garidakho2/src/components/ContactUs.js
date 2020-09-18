import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MailIcon from "@material-ui/icons/Mail";

import Grid from "@material-ui/core/Grid";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

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
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paperleft: {
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paperright: {
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  link: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          CONTACT US
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <div className={classes.paperleft}>
              <Avatar className={classes.avatar}>
                <ContactSupportIcon />
              </Avatar>
              <h4>Connect With Us</h4>
              <a
                className={classes.link}
                key="Email"
                component="a"
                href="mailto:garidakho@gmail.com"
              >
                <Typography className={classes.typography}>
                  Email: garidakho@gmail.com
                </Typography>
              </a>
              <br />
              <a className={classes.link} href="tel:+919062532279">
                <Typography>Contact Number : +91 90625 32279</Typography>
              </a>

              <br />
              <a
                className={classes.link}
                href="https://www.facebook.com/garidakho/"
              >
                <Typography>Facebook : Gari Dakho PVT LTD</Typography>
              </a>
              <br />
              <a
                className={classes.link}
                href="https://api.whatsapp.com/send?phone=91XXXXXXXXXX"
              >
                <Typography>Whatsapp : +919062532279</Typography>
              </a>
            </div>
          </Grid>

          <Grid item xs={6} sm={6}>
            <div className={classes.paperright}>
              <Avatar className={classes.avatar}>
                <MailIcon />
              </Avatar>
              <h4>Write to Us</h4>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Phone No"
                  name="Phone"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
