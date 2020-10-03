import React from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import {
  makeStyles,
  useTheme,
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  Button,
  ListItem,
  Tab,
  Tabs,
  Card,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@material-ui/core";
//import axios from "axios"; //if needed
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import FormHelperText from "@material-ui/core/FormHelperText";

import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import SettingsIcon from "@material-ui/icons/Settings";
import SecurityIcon from "@material-ui/icons/Security";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FilterListIcon from "@material-ui/icons/FilterList";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Theme from "./Theme";
import CarDataAxios from "./CarDataAxios";
import sellingCarData from "../asset/sellingCarData";
import Image from "../asset/svg/city-driver-concept-illustration_114360-1209.jpg";

import Image2 from "../asset/svg/undraw_people_search_wctu1.jpg";
import "../asset/ribbon.css";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
  },
  topbanner: {
    position: "relative",
    marginTop: theme.spacing(2),
    width: "100%",
    background: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "contain",
  },
  container: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  typography: {
    margin: theme.spacing(1),

    padding: "10px",
    width: "40%",
    background: "rgba(0, 114, 156, 0.8)",
    color: "white",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
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
  grid: {
    flexGrow: 1,
  },

  link: {
    color: "black",
    textDecoration: "inherit",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  icon: {
    display: "none",
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  formControl: {
    width: "100%",
  },
}));

export default function SellingCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;
  //this is used when the dialog box opens for single car

  /*this shadowVariableName is used to show box shadow
  ----------------------------------------------------------------*/

  /*OpenVariableName is used to SetOpen truen and show the drawer
  ----------------------------------------------------------------*/

  /*This handleclick functions are assigned to every filter name to open drawer
  ----------------------------------------------------------------------------------*/

  /*---------------------------------------------------------------------------------------------------------------------*/

  /*These are the initial values of the Filters which is assigned to the filter values and
   will be used later in the query in map function
  ---------------------------------------------------------------------------------------------------------------------*/
  const [Budget, setBudget] = React.useState([15000, 1000000]); //This will be replaced by database values
  const [KilometerDriven, setKilometerDriven] = React.useState([0, 100000]); //This will be replaced by database values
  const [FuelType, setFuelType] = React.useState({
    Petrol: true,
    Diesel: true,
    Gas: true,
  });
  const [TransmissionType, setTransmissionType] = React.useState({
    Auto: true,
    Manual: true,
  });
  const [Owner, setOwner] = React.useState(3);
  const [RegistrationCity, setRegistrationCity] = React.useState("Kolkata");
  const [BodyType, setBodyType] = React.useState({
    Sedan: true,
    Coupe: true,
    Minivan: true,
    SUV: true,
  });
  const [ModelYear, setModelYear] = React.useState([
    2012,
    new Date().getFullYear(),
  ]);
  /*---------------------------------------------------------------------------------------------------------------------*/

  /*Handle change functions are used to assign a value to a field
  ---------------------------------------------------------------------------------------------------------------------*/

  /*
------------------------------------------------------------
when new filter needed add before this/*

  /*This function is used to open a single car dialog box or dynamically navigate to new page
  ----------------------------------------------------------------*/
  // const [OpenSingleCar, setOpenSingleCar] = React.useState(false);
  // const [SingleCarId, setSingleCarId] = React.useState("");
  // const handleCloseSingleCar = () => {
  //   setOpenSingleCar(!OpenSingleCar);
  // };
  const handleClickSingleCar = (SingleCarId, SingleCarTitle) => {
    history.push("/car/" + SingleCarId); //either pass id of name which is unique
    //history.push("/car/" + SingleCarTitle);
    // setOpenSingleCar(!OpenSingleCar); // it is needed when using dialog box
    // setSingleCarId(SingleCarId);
  };

  /*This function resets all filters
  ----------------------------------------------------------------*/

  //add new filters reset here

  /*These assignments are used so that the query becomes easier
  ----------------------------------------------------------------*/
  const Fuel = [
    FuelType.Petrol ? "Petrol" : "",
    FuelType.Diesel ? "Diesel" : "",
    FuelType.Gas ? "Gas" : "",
  ];
  const Body = [
    BodyType.Sedan ? "Sedan" : "",
    BodyType.Coupe ? "Coupe" : "",
    BodyType.Minivan ? "Minivan" : "",
    BodyType.SUV ? "SUV" : "",
  ];
  const Transmission = [
    TransmissionType.Auto ? "Auto" : "",
    TransmissionType.Manual ? "Manual" : "",
  ];
  /*here goes the filter index
  -------------------------------------------------------------------------------------*/

  const [FilterTabIndex, setFilterTabIndex] = React.useState(0);
  const handleChangeFilterTabIndex = (event, newFilterTabIndex) => {
    setFilterTabIndex(newFilterTabIndex);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`adminfunc${index}`}
        aria-labelledby={`adminfunc-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1} border={1} style={{ width: "90%" }}>
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
      id: `adminfunc-${index}`,
      "aria-controls": `adminfunc-${index}`,
    };
  }
  /*Setting the filter values
  -----------------------------------------------------------------*/
  const [FilterValue, setFilterValue] = React.useState({
    Budget: 0,
    VehicleType: "",
  });

  const handleChangeFilterValue = (event) => {
    const name = event.target.name;
    setFilterValue({
      ...FilterValue,
      [name]: event.target.value,
    });
  };
  console.log(FilterValue.Budget, FilterValue.VehicleType);
  return (
    <div className={classes.root}>
      {/*This is the right side container
      -------------------------------------------------------------------
      */}
      <div className={classes.container}>
        <div className={classes.topbanner}>
          <Typography className={classes.typography} variant="h4">
            CHECK OUT OUR NEW CARS
          </Typography>
          <div style={{ height: "60px" }}></div>
          <Tabs
            value={FilterTabIndex}
            onChange={handleChangeFilterTabIndex}
            scrollButtons="on"
            aria-label="tabs"
            style={{
              color: "black",

              bottom: 0,
              left: "15px",
              zIndex: 2,
              position: "absolute",
            }}
          >
            <Tab
              style={{
                borderTopLeftRadius: 10,

                background:
                  FilterTabIndex === 0 ? "rgba(0, 114, 156, 0.8)" : "#dae6eb",
                color: FilterTabIndex === 0 ? "white" : "black",
              }}
              label="BY BUDGET"
              {...showtab(0)}
            />
            <Tab
              style={{
                borderTopRightRadius: 10,
                background:
                  FilterTabIndex === 1 ? "rgba(0, 114, 156, 0.8)" : "#dae6eb",
                color: FilterTabIndex === 1 ? "white" : "black",
              }}
              label="BY MODEL"
              {...showtab(1)}
            />
          </Tabs>
        </div>
        {/*choosing the filter 
        -----------------------------------------------*/}
        <div
          style={{
            borderColor: "#004346",
            backgroundColor: "white",
            width: "100%",
            paddingLeft: "30px",
            marginBottom: "20px",
          }}
        >
          <TabPanel value={FilterTabIndex} index={0} dir={theme.direction}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4} md={4}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  color="secondary"
                >
                  <InputLabel htmlFor="Budget">Budget</InputLabel>
                  <Select
                    native
                    value={FilterValue.Budget}
                    onChange={handleChangeFilterValue}
                    label="Budget"
                    inputProps={{
                      name: "Budget",
                      id: "Budget",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {/*After this the option will be inside a map*/}
                    <option value={5}>1-5 Lakh</option>
                    <option value={10}>5-10 Lakh</option>
                    <option value={15}>10-15 Lakh</option>
                    <option value={20}>15-20 Lakh</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControl
                  variant="outlined"
                  color="secondary"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="VehicleType">Vehicle Type</InputLabel>
                  <Select
                    native
                    value={FilterValue.VehicleType}
                    onChange={handleChangeFilterValue}
                    label="VehicleType"
                    inputProps={{
                      name: "VehicleType",
                      id: "VehicleType",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {/*After this the option will be inside a map*/}
                    <option value={"Sedan"}>Sedan</option>
                    <option value={"Coupe"}>Coupe</option>
                    <option value={"Minivan"}>Minivan</option>
                    <option value={"SUV"}>SUV</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                item
                xs={12}
                sm={4}
                md={4}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={FilterTabIndex} index={1} dir={theme.direction}>
            hello2
          </TabPanel>
        </div>

        <Grid container justify="center" spacing={5}>
          {/*The mapping function for cycle through the data object*/}
          {sellingCarData.map((car) => {
            if (
              /*Here goes all the query*/
              car.price >= Budget[0] &&
              car.price <= Budget[1] &&
              car.distance >= KilometerDriven[0] &&
              car.distance <= KilometerDriven[1] &&
              car.year >= ModelYear[0] &&
              car.year <= ModelYear[1] &&
              (car.fuel === Fuel[0] ||
                car.fuel === Fuel[1] ||
                car.fuel === Fuel[2]) &&
              (car.body === Body[0] ||
                car.body === Body[1] ||
                car.body === Body[2] ||
                car.body === Body[3]) &&
              car.owner <= Owner &&
              car.city === RegistrationCity &&
              (car.transmission === Transmission[0] ||
                car.transmission === Transmission[1])
            ) {
              return (
                <Grid key={car.id} item xs={12} sm={8} md={6} lg={4}>
                  <ListItem
                    disableGutters
                    button
                    key={car.id}
                    onClick={() => handleClickSingleCar(car.id, car.title)}
                  >
                    <Card className={classes.card}>
                      <Paper className={classes.media}>
                        <div className={classes.imagebox}>
                          <img
                            className={classes.image}
                            width="960"
                            height="540"
                            src={car.img}
                            alt={car.title}
                          />
                        </div>
                        <div className="ribbon ribbon-top-left">
                          <span>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <CheckCircleIcon className={classes.ribbontext} />
                              <Typography className={classes.ribbontext}>
                                MONEYBACK
                              </Typography>
                            </div>
                          </span>
                        </div>
                      </Paper>

                      <CardContent>
                        <Typography
                          className={classes.cardtypography}
                          variant="h6"
                          component="h2"
                        >
                          {car.title}
                          {bull} ₹{car.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {car.distance} km
                          {bull}
                          {car.fuel}
                          {bull}Owner {car.owner}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </div>
    </div>
  );
}
