import React from "react";

import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";

import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
    position: "sticky",
    backgroundColor: Theme.palette.background.darkBlue,
    borderRadius: theme.shape.borderRadius,
  },
  toolbar: {
    //The Outer bar that contain all the contents
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
    fontSize: "2em",
  },
  text: {
    flexGrow: 1,
    color: "white",
    fontSize: "1em",
    padding: theme.spacing(0, 1),
  },
  search: {
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(2),
    backgroundColor: fade(theme.palette.common.white, 0.35),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },

    width: "auto",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  icon: {
    color: "white",
    padding: theme.spacing(0, 1),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
  },
  inputInput: {
    padding: theme.spacing(0, 2),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
    width: "auto",
  },

  anchor: {
    color: "white",
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
  },
}));

export default function HeaderTab() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          <NavLink
            className={classes.navlink}
            to="/"
            activeClassName="selected"
          >
            <DirectionsCarIcon className={classes.icon} />
            Gari Dakho
          </NavLink>
        </Typography>

        <NavLink className={classes.navlink} to="/newcar">
          New Car
        </NavLink>

        <NavLink className={classes.navlink} to="/usedcar">
          Used Car
        </NavLink>

        <NavLink className={classes.navlink} to="/news">
          News
        </NavLink>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.inputInput}>
            <TextField id="search" placeholder="Search"></TextField>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
