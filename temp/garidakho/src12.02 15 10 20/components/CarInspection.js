//child component of showsingleusedcar
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import {
  makeStyles,
  Tabs,
  Tab,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";
import Axios from "axios";
import Theme from "./Theme";
/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),

    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    boxShadow: "2px 5px 5px grey",
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
  },
  card: {
    width: "100%",
  },
  media: {
    width: "100%",
  },
  imagebox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
  },

  ribbontext: {
    fontFamily: "lato",
    fontSize: 12,
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    width: "100%",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  formControl: {
    width: "100%",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CarInspection(props) {
  const classes = useStyles();
  //Tab changing
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //get exterior body data
  const [CarBodyData, setCarBodyData] = useState("");
  async function get_exterior_body_data() {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/i_report_exterior_body_data/?get_by=id&id=car23",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCarBodyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //get exterior tyre data
  const [CarTyreData, setCarTyreData] = useState("");
  async function get_exterior_tyre_data() {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/i_report_exterior_tyre_data/?get_by=id&id=car23",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setCarTyreData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /*Function calls*/
  useEffect(() => {
    get_exterior_body_data();
    get_exterior_tyre_data();
  }, []);
  return (
    <div className={classes.container}>
      <Divider />
      <Typography variant="h5" style={{ margin: "10px 20px 20px 0px" }}>
        CAR INSPECTION DATA
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="BODY" {...a11yProps(0)} />
        <Tab label="TRYE" {...a11yProps(1)} />
        <Tab label="ENGINE" {...a11yProps(2)} />
        <Tab label="OTHERS" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {JSON.stringify(CarBodyData)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {JSON.stringify(CarTyreData)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </div>
  );
}
