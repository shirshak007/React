import React from "react";
import {
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Paper,
  InputBase,
  Typography,
} from "@material-ui/core";

import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
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
    fontSize: 25,
    [theme.breakpoints.up("xs")]: {
      fontSize: 20,
    },
  },
  text: {
    flexGrow: 1,
    color: "white",
    fontSize: "1em",
    fontFamily: "lato",
    padding: theme.spacing(0, 1),
  },
  space: {
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
  divider: {
    height: 20,
    margin: 4,
  },

  container: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
  },

  navlink: {
    color: "white",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
    fontFamily: "lato",
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
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
