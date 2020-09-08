import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Theme from "./Theme";
import HeaderTab from "./HeaderTab";
import NotFound from "./NotFound";
import newcar from "./newcar";
import usedcar from "./usedcar";
import news from "./news";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: Theme.palette.background.darkBlue,
    textColor: "white",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
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

            <LinkTab className={classes.tab} label="News" {...a11yProps(0)} />
          </Tabs>
          <Switch>
            <Route exact path="/usedcar" component={usedcar} />
            <Route path="/newcar" component={newcar} />
            <Route path="/news" component={news} />
          </Switch>
        </BrowserRouter>
      </AppBar>
    </div>
  );
}
