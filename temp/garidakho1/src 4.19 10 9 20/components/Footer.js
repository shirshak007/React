import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Paper,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import Theme from "./Theme";

function Copyright() {
  let classes = useStyles();
  return (
    <Typography className={classes.typography}>
      {"Copyright © "}
      <a className={classes.link} href="https://garidakho.com/">
        garidakho.com
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: Theme.palette.background.darkBlue,
    padding: theme.spacing(1, 0),
    width: "100%",
    color: "white",
  },
  typographyhead: {
    color: "white",
    fontFamily: "lato",
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  typography: {
    color: "white",
    fontFamily: "lato",
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  link: {
    color: "white",
    textDecoration: "inherit",
  },
  paper: {
    backgroundColor: Theme.palette.background.darkBlue,
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>
                Overview
              </Typography>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>About Us</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>
                  Contact Us
                </Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>FAQs</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>Blog</Typography>
              </NavLink>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>Others</Typography>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>
                  Privacy Policy
                </Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>
                  Terms & Conditions
                </Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>
                  Store Locator
                </Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={classes.link} to="/news">
                <Typography className={classes.typography}>
                  Disclaimer
                </Typography>
              </NavLink>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>
                Contact Us
              </Typography>
            </ListItem>
            <ListItem>
              <MailIcon />
              <a
                className={classes.link}
                key="Email"
                component="a"
                href="mailto:garidakho@gmail.com"
              >
                <Typography className={classes.typography}>
                  garidakho@gmail.com
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.link} href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a
                className={classes.link}
                href="https://api.whatsapp.com/send?phone=91XXXXXXXXXX"
              >
                <WhatsAppIcon />
              </a>
              <a className={classes.link} href="https://www.instagram.com">
                <InstagramIcon />
              </a>
              <a className={classes.link} href="https://www.twitter.com">
                <TwitterIcon />
              </a>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>
                Download
              </Typography>
            </ListItem>
            <ListItem>
              <a className={classes.link} href="https://play.google.com/store">
                <AndroidIcon />
              </a>
              <a
                className={classes.link}
                href="https://www.apple.com/ios/app-store/"
              >
                <AppleIcon />
              </a>
            </ListItem>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Copyright />
          </Paper>
        </Grid>
      </Container>
    </footer>
  );
}
