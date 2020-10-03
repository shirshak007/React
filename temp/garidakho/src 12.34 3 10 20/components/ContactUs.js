import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import Grid from "@material-ui/core/Grid";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "./Theme";
import backgroundImg from "../asset/svg/city-driver-concept-illustration_114360-1209.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    //The Main container
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    //where the grid is shown
    marginTop: theme.spacing(2),
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperleft: {
    //the left grid
    marginTop: theme.spacing(2),
    paddingBottom: "20px",
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "linear-gradient(to bottom right,#c2fff0, #99ff99)",
    backgroundImage: `url(${backgroundImg})`,
    height: "450px",
    marginRight: "20px",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "30vw",
  },
  paperleftcontent: {
    //left paper grid content
    paddingLeft: "50px",
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
  },
  paperright: {
    //the right grid
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
    //the icon at he top of the grid
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    //the form input
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    //the submit button
    margin: theme.spacing(3, 0, 2, 0),
    backgroundColor: Theme.palette.background.darkBlue,
  },
  link: {
    //all the link to style the text and remove the underline
    display: "flex",
    flexDirection: "row",
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
    paddingBottom: "15px",
  },
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Typography variant="h4">CONTACT US</Typography> {/*Heading */}
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <div className={classes.paperleft}>
              <Avatar className={classes.avatar}>
                <ContactSupportIcon />
              </Avatar>
              <h5>Connect With Us</h5>

              <div className={classes.paperleftcontent}>
                <a
                  className={classes.link}
                  key="Email"
                  component="a"
                  href="mailto:garidakho@gmail.com"
                >
                  <MailIcon />
                  <Typography className={classes.typography}>
                    garidakho@gmail.com
                  </Typography>
                </a>

                <a
                  className={classes.link}
                  key="phone"
                  component="a"
                  href="tel:+919062532279"
                >
                  <CallIcon />
                  <Typography> +91 90625 32279</Typography>
                </a>

                <a
                  className={classes.link}
                  key="fb"
                  component="a"
                  href="https://www.facebook.com/garidakho/"
                >
                  <FacebookIcon />
                  <Typography>Gari Dakho PVT LTD</Typography>
                </a>

                <a
                  className={classes.link}
                  key="wa"
                  component="a"
                  href="https://api.whatsapp.com/send?phone=919062532279"
                >
                  <WhatsAppIcon />
                  <Typography>+919062532279</Typography>
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={6}>
            <div className={classes.paperright}>
              <Avatar className={classes.avatar}>
                <MailIcon />
              </Avatar>
              <h5>Write to Us</h5>
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
