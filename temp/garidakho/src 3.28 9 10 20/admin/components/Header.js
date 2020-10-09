import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

import { useCookies } from "react-cookie";
import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    backgroundColor: Theme.palette.background.darkBlue,
    borderRadius: theme.shape.borderRadius,
  },
  toolbar: {
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
    padding: theme.spacing(0, 1),
  },
  title: {
    flexGrow: 1,
  },
  titleicon: {
    fontSize: 30,
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up("xs")]: {
      fontSize: 25,
    },
  },
  titletext: {
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  space: {
    //To deal with the row break while shrinking
    color: Theme.palette.background.darkBlue,
  },
  text: {
    color: "white",
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
    },
  },
  textspace: {
    //To deal with the row break while shrinking
    fontSize: 7,
    color: Theme.palette.background.darkBlue,
    [theme.breakpoints.down("xs")]: {
      fontSize: 3,
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
    fontFamily: "lato",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    display: "none",
    [theme.breakpoints.up("sm")]: {
      //hide when shrink
      display: "block",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  container: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
  },

  navlink: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    textDecoration: "inherit",
    padding: theme.spacing(0, 2),
    fontFamily: "lato",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0.5),
    },
  },
}));

export default function HeaderTab() {
  let link = "";
  const classes = useStyles();
  const [cookies] = useCookies(["name"]);
  if (cookies.name) {
    link = "/adminhome";
  } else {
    link = "/adminlogin";
  }
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <NavLink
            className={classes.navlink}
            to="/"
            activeClassName="selected"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <DirectionsCarIcon className={classes.titleicon} />
              <Typography className={classes.titletext}>GARI</Typography>
              <Typography className={classes.space}>_</Typography>
              <Typography className={classes.titletext}>DAKHO</Typography>
            </div>
          </NavLink>
        </div>

        <NavLink className={classes.navlink} to={link}>
          LOGIN
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
