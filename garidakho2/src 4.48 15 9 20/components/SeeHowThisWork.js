import React from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  useTheme,
  Tab,
  Tabs,
  Typography,
  Box,
  Container,
} from "@material-ui/core";

import Theme from "./Theme";
import image1 from "../asset/svg/undraw_order_a_car_3tww.svg";
import image2 from "../asset/svg/undraw_absorbed_in_xahs.svg";
import image3 from "../asset/svg/undraw_business_deal_cpi9.svg";

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
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
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
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    borderLeft: "30px solid #bce1f5",
  },
  arrowright1: {
    width: 0,
    height: 0,
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    borderLeft: "30px solid #6bd8ff",
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`slideshow${index}`}
      aria-labelledby={`slideshow-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div className={classes.text}>{children}</div>
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
function showtab(index) {
  return {
    id: `slideshow-${index}`,
    "aria-controls": `slideshow-${index}`,
  };
}
export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          centered
        >
          <Tab
            style={{ backgroundColor: "#bce1f5" }}
            label={
              <div
                style={{
                  height: "100%",
                  fontSize: 12,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                Online Car Evaluation
              </div>
            }
            {...showtab(0)}
          />

          <Tab
            style={{ backgroundColor: "#6bd8ff", padding: 0 }}
            label={
              <div
                style={{
                  height: "100%",
                  fontSize: 12,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ height: "100%" }}
                  className={classes.arrowright}
                />
                Appointment & Visit Branch
              </div>
            }
            {...showtab(1)}
          />
          <Tab
            style={{ backgroundColor: "#42cdff", padding: 0 }}
            label={
              <div
                style={{
                  height: "100%",
                  marginRight: 5,
                  fontSize: 12,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ height: "100%" }}
                  className={classes.arrowright1}
                />{" "}
                Sell Can in Single Visit
              </div>
            }
            {...showtab(2)}
          />
        </Tabs>
        <Container>
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
              <img className={classes.image} src={image3} alt={image3} />
            </div>
          </TabPanel>
        </Container>
      </div>
    </div>
  );
}
