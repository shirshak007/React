import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Link,
  Grid,
  Container,
  Paper,
  ListItem,
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
  let classes = useStyles();
  return (
    <Typography className={classes.typography}>
      {"Copyright © "}
      <Link color="inherit" href="https://garidakho.com/">
        garidakho.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(0, 1),
  },
  footer: {
    backgroundColor: Theme.palette.background.darkBlue,
    padding: theme.spacing(1, 0),

    left: 0,
    width: "100%",
    color: "white",
  },
  typographyhead: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 25,
  },
  typography: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 15,
  },
  anchor: {
    color: "white",
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
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>
                Overview
              </Typography>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>About Us</Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>
                  Contact Us
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>FAQs</Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>Blog</Typography>
              </a>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem>
              <Typography className={classes.typographyhead}>Others</Typography>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>
                  Privacy Policy
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>
                  Terms & Conditions
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>
                  Store Locator
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a className={classes.anchor} href="/news">
                <Typography className={classes.typography}>
                  Disclaimer
                </Typography>
              </a>
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
                className={classes.anchor}
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
              <a className={classes.anchor} href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a
                className={classes.anchor}
                href="https://api.whatsapp.com/send?phone=91XXXXXXXXXX"
              >
                <WhatsAppIcon />
              </a>
              <a className={classes.anchor} href="https://www.instagram.com">
                <InstagramIcon />
              </a>
              <a className={classes.anchor} href="https://www.twitter.com">
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
              <a
                className={classes.anchor}
                href="https://play.google.com/store"
              >
                <AndroidIcon />
              </a>
              <a
                className={classes.anchor}
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
