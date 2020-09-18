import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Paper,
  ListItem,
  makeStyles,
} from "@material-ui/core";

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
  footer: {
    flexGrow: 1,
    position: "sticky",
    backgroundColor: Theme.palette.background.darkBlue,
    padding: theme.spacing(1, 0),
    width: "100%",
    color: "white",
    zIndex: theme.zIndex.drawer + 1,
  },
  grid: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6} className={classes.grid}>
                <div>
                  <ListItem>
                    <Typography className={classes.typographyhead}>
                      Overview
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <NavLink className={classes.link} to="/news">
                      <Typography className={classes.typography}>
                        About Us
                      </Typography>
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
                      <Typography className={classes.typography}>
                        FAQs
                      </Typography>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink className={classes.link} to="/news">
                      <Typography className={classes.typography}>
                        Blog
                      </Typography>
                    </NavLink>
                  </ListItem>
                </div>
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <div>
                  <ListItem>
                    <Typography className={classes.typographyhead}>
                      Others
                    </Typography>
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
                </div>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  style={{
                    backgroundColor: Theme.palette.background.darkBlue,
                    textAlign: "center",
                  }}
                >
                  <Copyright />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
