import React from "react";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import News from "./News";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
  },
  toolbar: {
    //The Outer bar that contain all the contents
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
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

    padding: theme.spacing(0, 1),
  },
}));

export default function HeaderTab() {
  const classes = useStyles();

  const [alignment, setAlignment] = React.useState("init");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <NavLink
              className={classes.navlink}
              to="/"
              activeClassName="selected"
            >
              <DirectionsCarIcon style={{ color: "white" }} />
            </NavLink>

            <Typography className={classes.title} variant="h6">
              Gari Dakho
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
      </div>
    </div>
  );
}
