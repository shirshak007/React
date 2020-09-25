import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Theme from "./Theme";
import Home from "./Home";
import NewCar from "./NewCar";
import UsedCar from "./UsedCar";
import News from "./News";

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
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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
}));

export default function HeaderTab() {
  const classes = useStyles();

  const [alignment, setAlignment] = React.useState("init");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Link className={classes.anchor} to="/">
              <ToggleButtonGroup
                className={classes.anchor}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="init" aria-label="left aligned">
                  <DirectionsCarIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Link>
            <Typography className={classes.title} variant="h6">
              Gari Dakho
            </Typography>

            <Link className={classes.anchor} to="/newcar">
              <ToggleButtonGroup
                className={classes.anchor}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  className={classes.anchor}
                  value="left"
                  aria-label="left aligned"
                >
                  New Car
                </ToggleButton>
              </ToggleButtonGroup>
            </Link>

            <Link className={classes.anchor} to="/usedcar">
              <ToggleButtonGroup
                className={classes.anchor}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                {" "}
                <ToggleButton
                  className={classes.anchor}
                  value="center"
                  aria-label="centered"
                >
                  Used Car
                </ToggleButton>
              </ToggleButtonGroup>
            </Link>

            <Link className={classes.anchor} to="/news">
              <ToggleButtonGroup
                className={classes.anchor}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  className={classes.anchor}
                  value="right"
                  aria-label="right aligned"
                >
                  News
                </ToggleButton>
              </ToggleButtonGroup>
            </Link>

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
        <Container className={classes.container}>
          <Switch>
            <Route exact path="/newcar" component={NewCar} />
            <Route path="/usedcar" component={UsedCar} />
            <Route path="/news" component={News} />
            <Route path="*" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}
