import React, { Fragment } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Tab,
  Tabs,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Theme from "./Theme";
// import NotFound from "./NotFound";
// import newcar from "./newcar";
// import usedcar from "./usedcar";
// import news from "./news";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    //The Outer bar that contain all the contents
    backgroundColor: Theme.palette.background.darkBlue,
    position: "static",
  },
  title: {
    flexGrow: 1,
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
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    padding: theme.spacing(0, 2),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
    width: "auto",
  },

  tabs: {
    flexGrow: 1,
    width: "100%",
    padding: theme.spacing(0, 0.1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Theme.palette.background.blue,
    [theme.breakpoints.up("xs")]: {
      width: "auto",
    },
  },
  tab: {
    flexGrow: 1,
    fontSize: ".75rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Theme.palette.background.darkBlue,
    textColor: "white",
    [theme.breakpoints.down("sm")]: {
      //when shrink then fontsize will decrease
      fontSize: ".50rem",
      width: "100%",
    },
  },
}));

export default function HeaderTab() {
  const classes = useStyles();
  const allTabs = ["/newcar", "/usedcar", "/news"];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <DirectionsCarIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Gari Dakho
          </Typography>
          <div className={classes.tabs}>
            <BrowserRouter>
              <Route
                path="/"
                render={({ location }) => (
                  <Fragment>
                    <Tabs className={classes.tabs} value={location.pathname}>
                      <Tab
                        className={classes.tab}
                        label="New Car"
                        value="/newcar"
                        component={Link}
                        to={allTabs[0]}
                      />
                      <Tab
                        className={classes.tab}
                        label="Used Car"
                        value="/usedcar"
                        component={Link}
                        to={allTabs[1]}
                      />
                      <Tab
                        className={classes.tab}
                        label="News"
                        value="/news"
                        component={Link}
                        to={allTabs[2]}
                      />
                    </Tabs>
                    <Switch>
                      <Route
                        path={allTabs[0]}
                        render={() => <div>New Car</div>}
                      />
                      <Route
                        path={allTabs[1]}
                        render={() => <div>Used Car</div>}
                      />
                      <Route path={allTabs[2]} render={() => <div>News</div>} />
                    </Switch>
                  </Fragment>
                )}
              />
            </BrowserRouter>
          </div>
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
  );
}
