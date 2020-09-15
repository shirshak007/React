import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Theme from "./Theme";
import image1 from "../asset/svg/undraw_order_a_car_3tww.svg";
import image2 from "../asset/svg/undraw_absorbed_in_xahs.svg";
import image3 from "../asset/svg/undraw_business_deal_cpi9.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "50%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
  },
  arrowright: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: "10px solid blue",
  },
  imagebox: {
    height: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.typography} variant="h6">
            SEE HOW THIS WORKS
          </Typography>
        </div>
        <Tabs
          style={{ borderRadius: 14 }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            style={{ backgroundColor: "antiquewhite" }}
            label={
              <div
                style={{
                  padding: "2px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "right",
                }}
              >
                Online Car Evaluation
                <div
                  style={{ height: "100%" }}
                  className={classes.arrowright}
                />{" "}
              </div>
            }
            {...a11yProps(0)}
          />

          <Tab
            style={{ backgroundColor: "antiquewhite" }}
            label="Appointment & Visit Branch"
            {...a11yProps(1)}
          />
          <Tab
            style={{ backgroundColor: "antiquewhite" }}
            label="Sell Can in Single Visit"
            {...a11yProps(2)}
          />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={image1} alt={image1} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={image2} alt={image2} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className={classes.imagebox}>
              {" "}
              <img className={classes.image} src={image3} alt={image3} />
            </div>{" "}
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
