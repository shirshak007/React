import React from "react";
import {
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Paper,
  InputBase,
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
    //The Outer bar that contain all the contents
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
    padding: theme.spacing(0, 2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2em",
    fontFamily: "lato",
  },

  text: {
    flexGrow: 1,
    color: "white",
    fontSize: "1em",
    fontFamily: "lato",
    padding: theme.spacing(0, 1),
  },
  search: {
    alignItems: "center",
    width: "auto",

    backgroundColor: fade(theme.palette.common.white, 0.35),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
    fontFamily: "lato",
  },
  iconButton: {
    padding: 5,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".25em",
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

  anchor: {
    color: "white",
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
        <div className={classes.title} variant="h6">
          <NavLink
            className={classes.navlink}
            to="/"
            activeClassName="selected"
          >
            <IconButton className={classes.iconButton}>
              <DirectionsCarIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.iconButton}>GARI DAKHO</IconButton>
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

        <Paper component="form" className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <Divider className={classes.divider} orientation="vertical" />
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>
    </AppBar>
  );
}
