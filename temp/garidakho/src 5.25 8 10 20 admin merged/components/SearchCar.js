//child component of home where large search box is located
import React from "react";
import { NavLink } from "react-router-dom";

import {
  makeStyles,
  Typography,
  Box,
  Container,
  Radio,
  FormControlLabel,
  TextField,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Theme from "./Theme";

import cars from "../asset/carData";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: "40vh",
    backgroundSize: "50vw",
    /*contain= Resize the background image to make sure the 
    image is fully visible
    cover=	Resize the background image to cover the entire container, even 
    if it has to stretch the image or cut a little bit off one of the edges*/
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  radio: {
    padding: theme.spacing(1),
    align: "center",
  },
  search: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    opacity: 0.9,
    marginBottom: "20px",
  },
  searchbox: {
    marginTop: theme.spacing(2),
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  searchbelow: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  text: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  navlink: {
    color: Theme.palette.background.darkBlue,
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
    fontFamily: "lato",
  },
}));

export default function SearchCar() {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState("newcar");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          FIND THE RIGHT CAR
        </Typography>
      </div>
      <Box
        style={{ backgroundColor: "#ffffff", opacity: 0.8 }}
        display="flex"
        justifyContent="center"
      >
        <FormControlLabel
          value="start"
          control={
            <Radio
              checked={selectedValue === "newcar"}
              onChange={handleChange}
              value="newcar"
              name="radio-button-demo"
              inputProps={{ "aria-label": "newcar" }}
            />
          }
          label="NEW"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={
            <Radio
              checked={selectedValue === "usedcar"}
              onChange={handleChange}
              value="usedcar"
              name="radio-button-demo"
              inputProps={{ "aria-label": "usedcar" }}
            />
          }
          label="OLD"
          labelPlacement="start"
        />
      </Box>

      <div className={classes.search}>
        <div className={classes.searchbox}>
          <Autocomplete
            id="car"
            style={{
              width: "100%",
            }}
            options={cars}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Cars ... "
                variant="outlined"
                color="secondary"
              />
            )}
          />
        </div>
        <div className={classes.searchbelow}>
          <p className={classes.navlink} style={{ textAlign: "left" }}>
            eg: Hyundai
            <span style={{ float: "right" }}>
              <NavLink className={classes.navlink} to="/newcar">
                Not sure? Visit here.
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}
