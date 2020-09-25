import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core";

import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Theme from "./Theme";
import NotFound from "./NotFound";
import newcar from "./newcar";
import usedcar from "./usedcar";
import news from "./news";

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
    marginLeft: 1,
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

    borderRadius: theme.shape.borderRadius,
    backgroundColor: Theme.palette.background.blue,
    [theme.breakpoints.up("sm")]: {
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function HeaderTab() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
              {/*when added routing... the active tab is not working... i will work on it 
          <Tabs
            className={classes.tabs}
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            indicatorColor="primary"
          >
            <Link to="/usedcar">
              <Tab label="Used Car" />
            </Link>

            <Link to="/newcar">
              <Tab label="New Car" />
            </Link>

            <Link to="/news">
              <Tab label="News" />
            </Link>
          </Tabs>*/}
              <Tabs
                className={classes.tabs}
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                indicatorColor="primary"
              >
                {/*We need to use router here*/}
                <LinkTab
                  className={classes.tab}
                  label="Used Car"
                  {...a11yProps(0)}
                />

                <LinkTab
                  className={classes.tab}
                  label="New Car"
                  {...a11yProps(0)}
                />

                <LinkTab
                  className={classes.tab}
                  label="News"
                  {...a11yProps(0)}
                />
              </Tabs>
              <Switch>
                <Route exact path="/usedcar" component={usedcar} />
                <Route path="/newcar" component={newcar} />
                <Route path="/news" component={news} />
              </Switch>
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
