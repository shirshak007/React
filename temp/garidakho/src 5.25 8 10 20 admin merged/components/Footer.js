import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Paper,
  ListItem,
  List,
  makeStyles,
} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import Theme from "./Theme";

function Copyright() {
  //function to show copyright text at the very bottom
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
  footer: {
    flexGrow: 1,
    position: "sticky",
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
            <List>
              <ListItem>
                <Typography className={classes.typographyhead}>
                  Overview
                </Typography>
              </ListItem>
              <ListItem>
                <NavLink className={classes.link} to="/about">
                  <Typography className={classes.typography}>
                    About Us
                  </Typography>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={classes.link} to="/contact">
                  <Typography className={classes.typography}>
                    Contact Us
                  </Typography>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={classes.link} to="/faqs">
                  <Typography className={classes.typography}>FAQs</Typography>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={classes.link} to="/blog">
                  <Typography className={classes.typography}>Blog</Typography>
                </NavLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography className={classes.typographyhead}>
                  Others
                </Typography>
              </ListItem>
              <ListItem>
                <NavLink className={classes.link} to="/privacy">
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
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography className={classes.typographyhead}>
                  Contact Us
                </Typography>
              </ListItem>
              <ListItem>
                <a
                  className={classes.link}
                  key="Email"
                  component="a"
                  href="mailto:garidakho@gmail.com"
                >
                  <Typography
                    className={classes.typography}
                    style={{
                      display: "flex",
                      flexDirection: "row",

                      alignItems: "left",
                    }}
                  >
                    <MailIcon /> Email us
                  </Typography>
                  <Typography
                    className={classes.typography}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    garidakho@gmail.com
                  </Typography>
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={classes.link}
                  alt="fb"
                  component="a"
                  href="https://www.facebook.com"
                >
                  {" "}
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <FacebookIcon alt="fb" />
                </a>
                <a
                  className={classes.link}
                  alt="wa"
                  component="a"
                  href="https://api.whatsapp.com/send?phone=91XXXXXXXXXX"
                >
                  {" "}
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <WhatsAppIcon alt="wa" />
                </a>
                <a
                  className={classes.link}
                  alt="insta"
                  component="a"
                  href="https://www.instagram.com"
                >
                  {" "}
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <InstagramIcon />
                </a>
                <a
                  className={classes.link}
                  alt="twi"
                  component="a"
                  href="https://www.twitter.com"
                >
                  {" "}
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <TwitterIcon alt="twi" />
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography className={classes.typographyhead}>
                  Download
                </Typography>
              </ListItem>
              <ListItem>
                <a
                  className={classes.link}
                  alt="gplay"
                  component="a"
                  href="https://play.google.com/store"
                >
                  {" "}
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <AndroidIcon alt="gplay" />
                </a>
                <a
                  className={classes.link}
                  alt="apple"
                  component="a"
                  href="https://www.apple.com/ios/app-store/"
                >
                  <font color={Theme.palette.background.darkBlue}>.</font>
                  <AppleIcon alt="apple" />
                </a>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Copyright /> {/*function definition earlier this file*/}
          </Paper>
        </Grid>
      </Container>
    </footer>
  );
}
