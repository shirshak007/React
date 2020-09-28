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
  RadioGroup,
  Radio,
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
import Theme from "./Theme";
import ShowSingleCar from "./ShowSingleCar";
import sellingCarData from "../asset/sellingCarData";
import "../asset/ribbon.css";

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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SellingCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  function valuetext(value) {
    return `${value}km`;
  }
  const [Owner, setOwner] = React.useState("");
  const handleChangeOwner = (event) => {
    setOwner(event.target.value);
  };
  const [City, setCity] = React.useState("");
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const [Body, setBody] = React.useState("");
  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const KilometerMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1000,
      label: "1000",
    },
  ];
  const YearMarks = [
    {
      value: 2012,
      label: "2012",
    },
    {
      value: new Date().getFullYear(),
      label: new Date().getFullYear(),
    },
  ];

  const [shadowKilometerDriven, setShadowKilometerDriven] = React.useState(
    true
  );
  const [shadowModelYear, setShadowModelYear] = React.useState(true);
  const [shadowFuelType, setShadowFuelType] = React.useState(true);
  const [shadowTransmissionType, setShadowTransmissionType] = React.useState(
    true
  );
  const [shadowBodyType, setShadowBodyType] = React.useState(true);
  const [shadowOwnerNumber, setShadowOwnerNumber] = React.useState(true);
  const [shadowRegistrationCity, setShadowRegistrationCity] = React.useState(
    true
  );
  const [OpenKilometerDriven, setOpenKilometerDriven] = React.useState(false);
  const handleClickKilometerDriven = () => {
    setOpenKilometerDriven(!OpenKilometerDriven);
    setShadowKilometerDriven(!shadowKilometerDriven);
  };
  const [OpenModelYear, setOpenModelYear] = React.useState(false);
  const handleClickModelYear = () => {
    setOpenModelYear(!OpenModelYear);
    setShadowModelYear(!shadowModelYear);
  };
  const [OpenFuelType, setOpenFuelType] = React.useState(false);
  const handleClickFuelType = () => {
    setOpenFuelType(!OpenFuelType);
    setShadowFuelType(!shadowFuelType);
  };
  const [OpenTransmissionType, setOpenTransmissionType] = React.useState(false);
  const handleClickTransmissionType = () => {
    setOpenTransmissionType(!OpenTransmissionType);
    setShadowTransmissionType(!shadowTransmissionType);
  };
  const [OpenBodyType, setOpenBodyType] = React.useState(false);
  const handleClickBodyType = () => {
    setOpenBodyType(!OpenBodyType);
    setShadowBodyType(!shadowBodyType);
  };
  const [OpenOwnerNumber, setOpenOwnerNumber] = React.useState(false);

  const handleClickOwnerNumber = () => {
    setOpenOwnerNumber(!OpenOwnerNumber);
    setShadowOwnerNumber(!shadowOwnerNumber);
  };
  const [OpenRegistrationCity, setOpenRegistrationCity] = React.useState(false);

  const handleClickRegistrationCity = () => {
    setOpenRegistrationCity(!OpenRegistrationCity);
    setShadowRegistrationCity(!shadowRegistrationCity);
  };
  const [OpenSingleCar, setOpenSingleCar] = React.useState(false);
  const [SingleCarId, setSingleCarId] = React.useState("");
  const handleCloseSingleCar = () => {
    setOpenSingleCar(!OpenSingleCar);
  };
  const handleClickSingleCar = (SingleCarId) => {
    setOpenSingleCar(!OpenSingleCar);
    setSingleCarId(SingleCarId);
  };

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
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
                aria-label="delete"
                onClick={handleClickKilometerDriven}
              >
                {OpenKilometerDriven ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenKilometerDriven} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowKilometerDriven ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <Slider
                defaultValue={100}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={20}
                color="secondary"
                marks={KilometerMarks}
                min={0}
                max={1000}
              />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
                aria-label="delete"
                onClick={handleClickModelYear}
              >
                {OpenModelYear ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenModelYear} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowModelYear ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <Slider
                defaultValue={2015}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                color="secondary"
                marks={YearMarks}
                min={2012}
                max={new Date().getFullYear()}
              />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
                aria-label="delete"
                onClick={handleClickFuelType}
              >
                {OpenFuelType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenFuelType} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowFuelType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <RadioGroup defaultValue="Petrol">
                <FormControlLabel
                  value="Petrol"
                  control={<Radio color="secondary" />}
                  label="Petrol"
                />
                <FormControlLabel
                  value="Diesel"
                  control={<Radio color="secondary" />}
                  label="Diesel"
                />

                <FormControlLabel
                  value="Gas"
                  control={<Radio color="secondary" />}
                  label="Gas"
                />
              </RadioGroup>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
                aria-label="delete"
                onClick={handleClickTransmissionType}
              >
                {OpenTransmissionType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenTransmissionType} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowTransmissionType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <RadioGroup row defaultValue="Automatic">
                <FormControlLabel
                  value="Automatic"
                  control={<Radio color="secondary" />}
                  label="Automatic"
                />
                <FormControlLabel
                  value="Manual"
                  control={<Radio color="secondary" />}
                  label="Manual"
                />
              </RadioGroup>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
                aria-label="delete"
                onClick={handleClickBodyType}
              >
                {OpenBodyType ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Collapse in={OpenBodyType} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                boxShadow: shadowBodyType ? "" : "0px 5px 5px grey",
              }}
              className={classes.nested}
            >
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Body
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Body}
                  onChange={handleChangeBody}
                  label="Body"
                >
                  <MenuItem value={1}>Sedan</MenuItem>
                  <MenuItem value={2}>Coupe</MenuItem>
                  <MenuItem value={3}>Minivan</MenuItem>
                  <MenuItem value={4}>SUV</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
                aria-label="delete"
                onClick={handleClickOwnerNumber}
              >
                {OpenOwnerNumber ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

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
                aria-label="delete"
                onClick={handleClickRegistrationCity}
              >
                {OpenRegistrationCity ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

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
                  value={City}
                  onChange={handleChangeCity}
                  label="City"
                >
                  <MenuItem value={1}>Kolkata</MenuItem>
                  <MenuItem value={2}>Delhi</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </div>

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
          {sellingCarData.map((car) => (
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
                            <CheckCircleIcon className={classes.ribbontext} />
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
                      {bull}
                      {car.owner}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
