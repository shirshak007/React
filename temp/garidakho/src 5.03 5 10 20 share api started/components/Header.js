import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import Theme from "./Theme";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    // backgroundColor: Theme.palette.background.darkBlue,
    borderRadius: theme.shape.borderRadius,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
    padding: theme.spacing(0, 1),
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  navRight: {
    display: "flex",
    flexDirection: "row",
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
    fontSize: 25,
    [theme.breakpoints.up("xs")]: {
      fontSize: 20,
    },
  },
  space: {
    //To deal with the row break while shrinking
    color: Theme.palette.background.darkBlue,
  },
  text: {
    color: "white",
    fontSize: 14,
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 9,
    // },
  },
  textspace: {
    //To deal with the row break while shrinking
    fontSize: 7,
    color: Theme.palette.background.darkBlue,
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
    padding: theme.spacing(0, 1.5),
    fontFamily: "lato",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0.5),
    },
  },
  top: {
    display: "flex",
    backgroundColor: "#eceff1",
    color: theme.palette.text.darkBlue,
    alignItems: "right",
    justifyContent: "flex-end",
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      paddingRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingRight: "0",
    },
  },
  topNavlink: {
    color: theme.palette.text.darkBlue,
    textDecoration: "inherit",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
}));

export default function HeaderTab() {
  const classes = useStyles();

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
        <div className={classes.navRight}>
          <NavLink className={classes.navlink} to="/newcar">
            <Typography className={classes.text}>NEW</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/usedcar">
            <Typography className={classes.text}>USED</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/sellcar">
            <Typography className={classes.text}>SELL</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/login">
            <Typography className={classes.text}>
              <PowerSettingsNewIcon />
            </Typography>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
