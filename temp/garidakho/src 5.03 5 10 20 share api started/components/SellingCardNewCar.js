import React from "react";

import PropTypes from "prop-types";
import {
  makeStyles,
  useTheme,
  Typography,
  Grid,
  Button,
  Tab,
  Tabs,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@material-ui/core";
//import axios from "axios"; //if needed

import FindOffersOnTopBrands from "./FindOffersOnTopBrands";
import SearchCarsByBodyType from "./SearchCarsByBodyType";
import FAQ from "./FAQ";
import LatestCarsSlide from "./LatestCarsSlide";
import Image from "../asset/svg/city-driver-concept-illustration_114360-1209.jpg";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  topbanner: {
    position: "relative",
    marginTop: theme.spacing(2),
    width: "100%",
    height: "40vh",

    background: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "300px 35vh",
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "130px 100px",
      height: "30vh",
    },
  },
  container: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
      width: "50%",
      fontSize: 22,
    },
  },

  formControl: {
    width: "100%",
  },
  filter: {
    borderColor: "#004346",
    backgroundColor: "white",
    width: "95%",

    paddingRight: "30px",
    paddingTop: "10px",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingRight: "10px",
    },
  },
}));

export default function SellingCardNewCar(props) {
  const classes = useStyles();

  const theme = useTheme();

  /*---------------------------------------------------------------------------------------------------------------------*/

  /*Handle change functions are used to assign a value to a field
  ---------------------------------------------------------------------------------------------------------------------*/

  /*
------------------------------------------------------------
when new filter needed add before this/*

  /*This function is used to open a single car dialog box or dynamically navigate to new page
  ----------------------------------------------------------------*/

  /*This function resets all filters
  ----------------------------------------------------------------*/

  //add new filters reset here

  /*These assignments are used so that the query becomes easier
  ----------------------------------------------------------------*/

  /*here goes the filter index
  -------------------------------------------------------------------------------------*/

  const [FilterTabIndex, setFilterTabIndex] = React.useState(0);
  const handleChangeFilterTabIndex = (event, newFilterTabIndex) => {
    setFilterTabIndex(newFilterTabIndex);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`setTab${index}`}
        aria-labelledby={`setTab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {children}
            </div>
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
      id: `setTab-${index}`,
      "aria-controls": `setTab-${index}`,
    };
  }
  /*Setting the filter values
  -----------------------------------------------------------------*/
  const [FilterValue, setFilterValue] = React.useState({
    Budget: 0,
    VehicleType: "",
    Brand: "",
    Model: "",
  });

  const handleChangeFilterValue = (event) => {
    const name = event.target.name;
    setFilterValue({
      ...FilterValue,
      [name]: event.target.value,
    });
  };
  console.log(
    FilterValue.Budget,
    FilterValue.VehicleType,
    FilterValue.Brand,
    FilterValue.Model
  );
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
              left: "20px",
              zIndex: 2,
              position: "absolute",
            }}
          >
            <Tab
              style={{
                borderTopLeftRadius: 10,

                background:
                  FilterTabIndex === 0 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
                color: FilterTabIndex === 0 ? "white" : "black",
              }}
              label="BY BUDGET"
              {...showtab(0)}
            />
            <Tab
              style={{
                borderTopRightRadius: 10,
                background:
                  FilterTabIndex === 1 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
                color: FilterTabIndex === 1 ? "white" : "black",
              }}
              label="BY MODEL"
              {...showtab(1)}
            />
          </Tabs>
        </div>
        {/*choosing the filter 
        -----------------------------------------------*/}
        <div className={classes.filter}>
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
                {/*The function after button click can be added later*/}
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
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4} md={4}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  color="secondary"
                >
                  <InputLabel htmlFor="Brand">Brand</InputLabel>
                  <Select
                    native
                    value={FilterValue.Brand}
                    onChange={handleChangeFilterValue}
                    label="Brand"
                    inputProps={{
                      name: "Brand",
                      id: "Brand",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {/*After this the option will be inside a map*/}
                    <option value={"Maruti"}>Maruti</option>
                    <option value={"Honda"}>Honda</option>
                    <option value={"Tata"}>Tata</option>
                    <option value={"Nissan"}>Nissan</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControl
                  variant="outlined"
                  color="secondary"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="Model">Model</InputLabel>
                  <Select
                    native
                    value={FilterValue.Model}
                    onChange={handleChangeFilterValue}
                    label="Model"
                    inputProps={{
                      name: "Model",
                      id: "Model",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {/*After this the option will be inside a map and the values 
                    will be according to the selected brand in previous section*/}
                    <option value={"Maruti 800"}>Maruti 800</option>
                    <option value={"Honda Model 1"}>Honda Model 1</option>
                    <option value={"Tata Model 2"}>Tata Model 2</option>
                    <option value={"Nissan Model 1"}>Nissan Model 1</option>
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
                {/*The function after button click can be added later*/}
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
        </div>
        <div style={{ width: "100%" }}>
          <LatestCarsSlide />
          {/* <LatestCars /> //this shows a long list so the previous component renders a use friendly slide*/}
          <FindOffersOnTopBrands />
          <SearchCarsByBodyType />

          <FAQ />
        </div>
      </div>
    </div>
  );
}
