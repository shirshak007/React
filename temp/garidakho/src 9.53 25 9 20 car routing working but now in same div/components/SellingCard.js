import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
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
  ListItemText,
  Collapse,
  Tooltip,
  Slider,
  Card,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

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

  const kmmarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1000,
      label: "1000",
    },
  ];
  const yearmarks = [
    {
      value: 2012,
      label: "2012",
    },
    {
      value: new Date().getFullYear(),
      label: new Date().getFullYear(),
    },
  ];

  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const [open4, setOpen4] = React.useState(false);

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const [open5, setOpen5] = React.useState(false);

  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = React.useState(false);

  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const [open7, setOpen7] = React.useState(false);

  const handleClick7 = () => {
    setOpen7(!open7);
  };

  let { url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <List>
          <Tooltip title="By Kilometers Driven">
            <ListItem
              button
              onClick={handleClick1}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary="By Kilometers Driven" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="kilometers">
                <ListItem className={classes.nested}>
                  <Slider
                    defaultValue={100}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={20}
                    color="secondary"
                    marks={kmmarks}
                    min={0}
                    max={1000}
                  />
                </ListItem>
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Model Year">
            <ListItem
              button
              onClick={handleClick2}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="By Model Year" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Year">
                <ListItem className={classes.nested}>
                  <Slider
                    defaultValue={2015}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    color="secondary"
                    marks={yearmarks}
                    min={2012}
                    max={new Date().getFullYear()}
                  />
                </ListItem>
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Fuel Type">
            <ListItem
              button
              onClick={handleClick3}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <LocalGasStationIcon />
              </ListItemIcon>
              <ListItemText primary="By Fuel Type" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Fuel Type">
                <ListItem className={classes.nested}>
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
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Transmission Type">
            <ListItem
              button
              onClick={handleClick4}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="By Transmission Type" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Transmission Type">
                <ListItem className={classes.nested}>
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
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Body Type">
            <ListItem
              button
              onClick={handleClick5}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary="By Body Type" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Body Type">
                <ListItem className={classes.nested}>
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
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Number of Owners">
            <ListItem
              button
              onClick={handleClick6}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <TransferWithinAStationIcon />
              </ListItemIcon>
              <ListItemText primary="By Number of Owners" />
              {open6 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="No of Owners">
                <ListItem className={classes.nested}>
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
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <Tooltip title="By Registration City">
            <ListItem
              button
              onClick={handleClick7}
              style={{ backgroundColor: "#e4ffb0" }}
            >
              <ListItemIcon className={classes.icon}>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="By Registration City" />
              {open7 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Divider />
          <Collapse in={open7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Registration City">
                <ListItem className={classes.nested}>
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
              </Tooltip>
            </List>
          </Collapse>
        </List>
        <Divider />
      </div>

      <Container className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.typography} variant="h6">
            CHECK OUT OUR CARS
          </Typography>
        </div>

        <Grid container justify="center" spacing={5}>
          {sellingCarData.map((car) => (
            <Grid key={car.id} item>
              <NavLink
                to={`/car/${car.id}`}
                key={car.id}
                className={classes.navlink}
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
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
