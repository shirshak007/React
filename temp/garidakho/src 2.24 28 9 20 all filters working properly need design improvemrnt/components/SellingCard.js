import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Collapse,
  Slider,
  Card,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Box,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
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
import Theme from "./Theme";
import ShowSingleCar from "./ShowSingleCar";
import sellingCarData from "../asset/sellingCarData";
import "../asset/ribbon.css";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    borderRight: `3px solid ${theme.palette.divider}`,
    width: 250,

    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  drawerPaper: {
    width: 240,

    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  content: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
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
  card: {
    width: 380,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  media: {
    width: "100%",
    height: 240,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  imagebox: {
    width: "100%",
    height: "100%",
    /*change the height always 30-40 pixex less than gridpaper. It contains the title of image*/
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
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
}));
//this is used when the dialog box opens for single car
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SellingCard(props) {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  //this shadowVariableName is used to show box shadow
  const [shadowKilometerDriven, setShadowKilometerDriven] = React.useState(
    true
  );
  const [shadowBudget, setShadowBudget] = React.useState(true);
  const [shadowFuelType, setShadowFuelType] = React.useState(true);
  const [shadowModelYear, setShadowModelYear] = React.useState(true);
  const [shadowBodyType, setShadowBodyType] = React.useState(true);
  const [shadowTransmissionType, setShadowTransmissionType] = React.useState(
    true
  );
  const [shadowOwnerNumber, setShadowOwnerNumber] = React.useState(true);
  const [shadowRegistrationCity, setShadowRegistrationCity] = React.useState(
    true
  );

  //OpenVariableName is used to SetOpen truen and show the drawer
  const [OpenBudget, setOpenBudget] = React.useState(false);
  const [OpenKilometerDriven, setOpenKilometerDriven] = React.useState(false);
  const [OpenRegistrationCity, setOpenRegistrationCity] = React.useState(false);
  const [OpenOwnerNumber, setOpenOwnerNumber] = React.useState(false);
  const [OpenBodyType, setOpenBodyType] = React.useState(false);
  const [OpenTransmissionType, setOpenTransmissionType] = React.useState(false);
  const [OpenFuelType, setOpenFuelType] = React.useState(false);
  const [OpenModelYear, setOpenModelYear] = React.useState(false);

  //This handleclick functions are assigned to every filter name to open drawer
  const handleClickBudget = () => {
    setOpenBudget(!OpenBudget);
    setShadowBudget(!shadowBudget);
  };
  const handleClickKilometerDriven = () => {
    setOpenKilometerDriven(!OpenKilometerDriven);
    setShadowKilometerDriven(!shadowKilometerDriven);
  };

  const handleClickModelYear = () => {
    setOpenModelYear(!OpenModelYear);
    setShadowModelYear(!shadowModelYear);
  };
  const handleClickFuelType = () => {
    setOpenFuelType(!OpenFuelType);
    setShadowFuelType(!shadowFuelType);
  };

  const handleClickTransmissionType = () => {
    setOpenTransmissionType(!OpenTransmissionType);
    setShadowTransmissionType(!shadowTransmissionType);
  };

  const handleClickBodyType = () => {
    setOpenBodyType(!OpenBodyType);
    setShadowBodyType(!shadowBodyType);
  };

  const handleClickOwnerNumber = () => {
    setOpenOwnerNumber(!OpenOwnerNumber);
    setShadowOwnerNumber(!shadowOwnerNumber);
  };

  const handleClickRegistrationCity = () => {
    setOpenRegistrationCity(!OpenRegistrationCity);
    setShadowRegistrationCity(!shadowRegistrationCity);
  };

  //These are the values of the Filters which is assigned to the filter values and will be used later in the query in map function
  const [Budget, setBudget] = React.useState([15000, 1000000]); //This will be replaced by database values
  const [KilometerDriven, setKilometerDriven] = React.useState([0, 100000]); //This will be replaced by database values
  const [FuelType, setFuelType] = React.useState({
    Petrol: true,
    Diesel: true,
    Gas: true,
  });

  const [TransmissionType, setTransmissionType] = React.useState({
    Automatic: true,
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

  /*Handle change functions are used to assign a value to a field*/
  const handleChangeFuelType = (event) => {
    setFuelType({ ...FuelType, [event.target.name]: event.target.checked });
  };
  const { Petrol, Diesel, Gas } = FuelType;
  const handleChangeBudget = (event, newBudgetValue) => {
    setBudget(newBudgetValue);
  };
  const handleChangeTransmissionType = (event) => {
    setTransmissionType({
      ...TransmissionType,
      [event.target.name]: event.target.checked,
    });
  };
  const { Automatic, Manual } = TransmissionType;
  const handleChangeKilometerDriven = (event, newKilometerDrivenValue) => {
    setKilometerDriven(newKilometerDrivenValue);
  };
  const handleChangeModelYear = (event, newModelYearValue) => {
    setModelYear(newModelYearValue);
  };
  const handleChangeOwner = (event) => {
    setOwner(event.target.value);
  };

  const handleChangeRegistrationCity = (event) => {
    setRegistrationCity(event.target.value);
  };

  const handleChangeBodyType = (event) => {
    setBodyType({ ...BodyType, [event.target.name]: event.target.checked });
  };
  const { Sedan, Coupe, Minivan, SUV } = BodyType;
  //when new filter needed add before this

  //This function is used to open a single car dialog box
  const [OpenSingleCar, setOpenSingleCar] = React.useState(false);
  const [SingleCarId, setSingleCarId] = React.useState("");
  const handleCloseSingleCar = () => {
    setOpenSingleCar(!OpenSingleCar);
  };
  const handleClickSingleCar = (SingleCarId) => {
    setOpenSingleCar(!OpenSingleCar);
    setSingleCarId(SingleCarId);
  };

  //This function resets all filters
  const handleClickClearAll = () => {
    setBudget([15000, 1500000]);
    setKilometerDriven([0, 100000]);
    setModelYear([2012, new Date().getFullYear()]);
    setBodyType({
      Sedan: true,
      Coupe: true,
      Minivan: true,
      SUV: true,
    });
    setFuelType({
      Petrol: true,
      Diesel: true,
      Gas: true,
    });
    setTransmissionType({ Automatic: true, Manual: true });
    setOwner(3);
    setRegistrationCity("Kolkata");
    //add new filters reset here
  };
  /*These assignments are used so that the query becomes easier*/
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

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        {/*This is the left side drawer where all filters
        -------------------------------------------------------------------*/}
        <List>
          {/*A list means a new filter*/}
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <FilterListIcon />
            </ListItemIcon>
            <ListItemText primary="Filters" />

            <ListItemSecondaryAction>
              <IconButton
                size="small"
                edge="end"
                aria-label="fliter"
                onClick={handleClickClearAll}
              >
                Clear All
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*budget filter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickBudget}>
          {/*first listicon is for the name of filter*/}
          <ListItem
            button
            style={{
              boxShadow: shadowBudget ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Budget" />
            {/*the arrow up and down*/}
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="budget"
                onClick={handleClickBudget}
              >
                {OpenBudget ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*Budget dropdown
        -------------------------------------------------------------------*/}
        <Collapse in={OpenBudget} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Slider
                value={Budget}
                min={15000}
                step={10000}
                max={1000000}
                onChange={handleChangeBudget}
                color="secondary"
              />
            </ListItem>
            <ListItem
              style={{
                boxShadow: shadowBudget ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {Budget[0]}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {Budget[1]}
                  </Box>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*km driver filter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickKilometerDriven}>
          <ListItem
            button
            style={{
              boxShadow: shadowKilometerDriven ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <DriveEtaIcon />
            </ListItemIcon>
            <ListItemText primary="By Kilometers Driven" />

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="kilometer"
                onClick={handleClickKilometerDriven}
              >
                {OpenKilometerDriven ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*Km driven filter drop down
        -------------------------------------------------------------------*/}
        <Collapse in={OpenKilometerDriven} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Slider
                value={KilometerDriven}
                min={0}
                step={1000}
                max={100000}
                onChange={handleChangeKilometerDriven}
                color="secondary"
              />
            </ListItem>
            <ListItem
              style={{
                boxShadow: shadowKilometerDriven ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {KilometerDriven[0]}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {KilometerDriven[1]}
                  </Box>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Model Year Filter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickModelYear}>
          <ListItem
            button
            style={{
              boxShadow: shadowModelYear ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary="By Model Year" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="model year"
                onClick={handleClickModelYear}
              >
                {OpenModelYear ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*Model Year drop down
        -------------------------------------------------------------------*/}
        <Collapse in={OpenModelYear} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Slider
                value={ModelYear}
                min={2012}
                step={1}
                max={new Date().getFullYear()}
                onChange={handleChangeModelYear}
                color="secondary"
              />
            </ListItem>
            <ListItem
              style={{
                boxShadow: shadowModelYear ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {ModelYear[0]}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    border={1}
                    borderRadius={5}
                    borderColor="secondary.main"
                    style={{ padding: "10px" }}
                  >
                    {ModelYear[1]}
                  </Box>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Fuel type filter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickFuelType}>
          <ListItem
            button
            style={{
              boxShadow: shadowFuelType ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <LocalGasStationIcon />
            </ListItemIcon>
            <ListItemText primary="By Fuel Type" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="fuel type"
                onClick={handleClickFuelType}
              >
                {OpenFuelType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenFuelType} timeout="auto" unmountOnExit>
          {/*drop down for fuel type
        -------------------------------------------------------------------*/}
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowFuelType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Petrol}
                        onChange={handleChangeFuelType}
                        name="Petrol"
                      />
                    }
                    label="Petrol"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Diesel}
                        onChange={handleChangeFuelType}
                        name="Diesel"
                      />
                    }
                    label="Diesel"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Gas}
                        onChange={handleChangeFuelType}
                        name="Gas"
                      />
                    }
                    label="Gas"
                  />
                </FormGroup>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Transmission type
        -------------------------------------------------------------------*/}
        <List onClick={handleClickTransmissionType}>
          <ListItem
            button
            style={{
              boxShadow: shadowTransmissionType ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="By Transmission Type" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="transmission"
                onClick={handleClickTransmissionType}
              >
                {OpenTransmissionType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenTransmissionType} timeout="auto" unmountOnExit>
          {/*drop down for Transmission type
        -------------------------------------------------------------------*/}
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowTransmissionType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Automatic}
                        onChange={handleChangeTransmissionType}
                        name="Automatic"
                      />
                    }
                    label="Automatic"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Manual}
                        onChange={handleChangeTransmissionType}
                        name="Manual"
                      />
                    }
                    label="Manual"
                  />
                </FormGroup>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Body type filter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickBodyType}>
          <ListItem
            button
            style={{
              boxShadow: shadowBodyType ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText primary="By Body Type" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="body type"
                onClick={handleClickBodyType}
              >
                {OpenBodyType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenBodyType} timeout="auto" unmountOnExit>
          {/*drop down for body filter
        -------------------------------------------------------------------*/}
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowBodyType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Sedan}
                        onChange={handleChangeBodyType}
                        name="Sedan"
                      />
                    }
                    label="Sedan"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Coupe}
                        onChange={handleChangeBodyType}
                        name="Coupe"
                      />
                    }
                    label="Coupe"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Minivan}
                        onChange={handleChangeBodyType}
                        name="Minivan"
                      />
                    }
                    label="Minivan"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={SUV}
                        onChange={handleChangeBodyType}
                        name="SUV"
                      />
                    }
                    label="SUV"
                  />
                </FormGroup>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Owner FIlter
        -------------------------------------------------------------------*/}
        <List onClick={handleClickOwnerNumber}>
          <ListItem
            button
            style={{
              boxShadow: shadowOwnerNumber ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <TransferWithinAStationIcon />
            </ListItemIcon>
            <ListItemText primary="By Number of Owners" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="no of owner"
                onClick={handleClickOwnerNumber}
              >
                {OpenOwnerNumber ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*drop down for Owner filter
        -------------------------------------------------------------------*/}
        <Collapse in={OpenOwnerNumber} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowOwnerNumber ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Owner
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Owner}
                  onChange={handleChangeOwner}
                  label="Owner"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        {/*Registration City Filter 
        -------------------------------------------------------------------*/}
        <List onClick={handleClickRegistrationCity}>
          <ListItem
            button
            style={{
              boxShadow: shadowRegistrationCity ? "2px 5px 5px grey" : "",
            }}
          >
            <ListItemIcon className={classes.icon}>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="By Registration City" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="reg city"
                onClick={handleClickRegistrationCity}
              >
                {OpenRegistrationCity ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/*Drop down for registration city filter
         -------------------------------------------------------------------*/}
        <Collapse in={OpenRegistrationCity} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowRegistrationCity ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={RegistrationCity}
                  onChange={handleChangeRegistrationCity}
                  label="City"
                >
                  <MenuItem value="Kolkata">Kolkata</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </div>

      {/*This is the right side container
      -------------------------------------------------------------------
      */}
      <Container className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.typography} variant="h6">
            CHECK OUT OUR CARS
          </Typography>
        </div>
        {OpenSingleCar ? (
          <Dialog
            fullScreen
            open={OpenSingleCar}
            onClose={handleCloseSingleCar}
            TransitionComponent={Transition}
          >
            <AppBar style={{ background: "transparent", boxShadow: "none" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  onClick={handleCloseSingleCar}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <ShowSingleCar id={SingleCarId} />
          </Dialog>
        ) : null}
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
                car.body === Body[2]) &&
              car.owner <= Owner &&
              car.city === RegistrationCity
            ) {
              return (
                <Grid key={car.id} item>
                  <ListItem
                    button
                    key={car.id}
                    onClick={() => handleClickSingleCar(car.id)}
                  >
                    <Card className={classes.card}>
                      <Paper className={classes.media}>
                        <div className={classes.imagebox}>
                          <img
                            className={classes.image}
                            src={car.img}
                            alt={car.title}
                          />

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
                                <CheckCircleIcon
                                  className={classes.ribbontext}
                                />
                                <Typography className={classes.ribbontext}>
                                  MONEYBACK
                                </Typography>
                              </div>
                            </span>
                          </div>
                        </div>
                      </Paper>

                      <CardContent>
                        <Typography
                          className={classes.cardtypography}
                          gutterBottom
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
      </Container>
    </div>
  );
}
