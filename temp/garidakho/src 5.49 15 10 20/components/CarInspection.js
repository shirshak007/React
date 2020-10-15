//child component of showsingleusedcar
import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import {
  makeStyles,
  useTheme,
  Tabs,
  Tab,
  Box,
  Typography,
  Slide,
  Grid,
  AppBar,
  Toolbar,
  Dialog,
  IconButton,
} from "@material-ui/core";
import Axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import Theme from "./Theme";
/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "2px 5px 5px grey",
    fontFamily: "lato",
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
    width: "100px",
    height: "80px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
          <div>{children}</div>
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarInspection(props) {
  const classes = useStyles();
  const theme = useTheme();
  //opening image dialog
  const [open, setOpen] = React.useState(false);
  const [Image, setImage] = React.useState("");
  const handleClickOpen = (id) => {
    setOpen(true);
    setImage(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Tab changing
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //get exterior body data
  const [CarBodyData, setCarBodyData] = useState([]);
  async function get_exterior_body_data() {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/i_report_exterior_body_data/?get_by=id&id=car23",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        console.log(response.data);
        setCarBodyData(response.data[0]);
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
        console.log(response.data);
        setCarTyreData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //get engine data
  const [CarEngineData, setCarEngineData] = useState("");
  async function get_engine_data() {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/i_report_exterior_engine_data/?get_by=id&id=car23",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        console.log(response.data[0]);
        setCarEngineData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //get others data
  const [CarOthersData, setCarOthersData] = useState([]);
  async function get_engine_data() {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/i_report_exterior_other_data/?get_by=id&id=car23",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data[0]));
        setCarOthersData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*Function calls*/
  useEffect(() => {
    get_exterior_body_data();
    // get_exterior_tyre_data();
    // get_engine_data();
    // get_engine_data();
  }, []);
  return (
    <div className={classes.container}>
      <Typography variant="h5" style={{ margin: "10px 20px 20px 0px" }}>
        CAR INSPECTION DATA
      </Typography>

      <Tabs
        value={value}
        onChange={(e) => handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="BODY" {...a11yProps(0)} />
        <Tab label="TRYE" {...a11yProps(1)} />
        <Tab label="ENGINE" {...a11yProps(2)} />
        <Tab label="OTHERS" {...a11yProps(3)} />
      </Tabs>
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <TabPanel value={value} index={0}>
          {/* {Object.keys(CarBodyData).forEach((key) => {
            // console.log(key + "=" + CarBodyData[key]);
            {
              <p>{key}</p>;
            }
          })} */}

          <Grid container spacing={2}>
            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    Roof
                  </Box>
                  <Box p={1}>{CarBodyData.roof}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.roof_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.roof_img
                    }
                    height="80px"
                    width="100px"
                    alt="roof_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    Bonnet
                  </Box>
                  <Box p={1}>{CarBodyData.bonnet}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.bonnet_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.bonnet_img
                    }
                    height="80px"
                    width="100px"
                    alt="bonnet_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    Apron
                  </Box>
                  <Box p={1}>{CarBodyData.apron}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.apron_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.apron_img
                    }
                    height="80px"
                    width="100px"
                    alt="apron_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    boot_floor
                  </Box>
                  <Box p={1}>{CarBodyData.boot_floor}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.boot_floor_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.boot_floor_img
                    }
                    height="80px"
                    width="100px"
                    alt="boot_floor_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    Dicky Door
                  </Box>
                  <Box p={1}>{CarBodyData.dicky_door}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.dicky_door_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.dicky_door_img
                    }
                    height="80px"
                    width="100px"
                    alt="dicky_door_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    Door_LHS_front
                  </Box>
                  <Box p={1}>{CarBodyData.door_LHS_front}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.door_LHS_front_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.door_LHS_front_img
                    }
                    height="80px"
                    width="100px"
                    alt="door_LHS_front_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    door_LHS_rear
                  </Box>
                  <Box p={1}>{CarBodyData.door_LHS_rear}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.door_LHS_rear_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.door_LHS_rear_img
                    }
                    height="80px"
                    width="100px"
                    alt="door_LHS_rear_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    door_RHS_front
                  </Box>
                  <Box p={1}>{CarBodyData.door_RHS_front}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.door_RHS_front_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.door_RHS_front_img
                    }
                    height="80px"
                    width="100px"
                    alt="door_RHS_front_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    door_RHS_rear
                  </Box>
                  <Box p={1}>{CarBodyData.door_RHS_rear}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.door_RHS_rear_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.door_RHS_rear_img
                    }
                    height="80px"
                    width="100px"
                    alt="door_RHS_rear_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    frenders_LHS
                  </Box>
                  <Box p={1}>{CarBodyData.frenders_LHS}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.frenders_LHS_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.frenders_LHS_img
                    }
                    height="80px"
                    width="100px"
                    alt="frenders_LHS_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    frenders_RHS
                  </Box>
                  <Box p={1}>{CarBodyData.frenders_RHS}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) => handleClickOpen(CarBodyData.frenders_RHS_img)}
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.frenders_RHS_img
                    }
                    height="80px"
                    width="100px"
                    alt="frenders_RHS_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_LHS_A
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_LHS_A}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_LHS_A_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_LHS_A_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_LHS_A_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_LHS_B
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_LHS_B}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_LHS_B_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_LHS_B_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_LHS_B_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_LHS_C
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_LHS_C}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_LHS_C_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_LHS_C_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_LHS_C_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_RHS_A
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_RHS_A}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_RHS_A_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_RHS_A_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_RHS_A_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_RHS_B
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_RHS_B}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_RHS_B_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_RHS_B_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_RHS_B_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,

                borderTop: `3px solid ${theme.palette.divider}`,

                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    pillars_RHS_C
                  </Box>
                  <Box p={1}>{CarBodyData.pillars_RHS_C}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.pillars_RHS_C_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.pillars_RHS_C_img
                    }
                    height="80px"
                    width="100px"
                    alt="pillars_RHS_C_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    quater_panel_LHS
                  </Box>
                  <Box p={1}>{CarBodyData.quater_panel_LHS}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.quater_panel_LHS_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.quater_panel_LHS_img
                    }
                    height="80px"
                    width="100px"
                    alt="quater_panel_LHS_img"
                  />
                </div>
              </Grid>
            </Grid>
            {/*----------------------------------------------------------------*/}

            <Grid
              style={{
                borderLeft: `3px solid ${theme.palette.divider}`,
                borderTop: `3px solid ${theme.palette.divider}`,
                borderBottom: `3px solid ${theme.palette.divider}`,
                borderRight: `3px solid ${theme.palette.divider}`,
                borderColor: "#f2f2f2",
              }}
              item
              xs={12}
              sm={6}
            >
              <Grid item xs={12}>
                <Box display="flex" p={1} bgcolor="background.paper">
                  <Box p={1} flexGrow={1}>
                    quater_panel_RHS
                  </Box>
                  <Box p={1}>{CarBodyData.quater_panel_RHS}</Box>{" "}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div
                  onClick={(e) =>
                    handleClickOpen(CarBodyData.quater_panel_RHS_img)
                  }
                  className={classes.imagebox}
                >
                  <img
                    className={classes.image}
                    src={
                      "http://garidakho.com/new_api/images/" +
                      CarBodyData.quater_panel_RHS_img
                    }
                    height="80px"
                    width="100px"
                    alt="quater_panel_RHS_img"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar>
              <Toolbar style={{ backgroundColor: "white" }}>
                <IconButton
                  edge="start"
                  style={{ color: "black" }}
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div style={{ padding: "100px", width: "100%" }}>
              <div style={{ width: "80vw" }}>
                <img
                  className={classes.image}
                  src={"http://garidakho.com/new_api/images/" + Image}
                  height="480px"
                  width="640px"
                  alt="quater_panel_RHS_img"
                />
              </div>
            </div>
          </Dialog>
        </TabPanel>

        <TabPanel value={value} index={1}>
          tyre
        </TabPanel>
        <TabPanel value={value} index={2}>
          engine
        </TabPanel>
        <TabPanel value={value} index={3}>
          other
        </TabPanel>
      </div>
    </div>
  );
}
