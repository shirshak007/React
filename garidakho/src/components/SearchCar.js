import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Container,
  fade,
  useTheme,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Theme from "./Theme";
import Image from "../asset/svg/undraw_people_search_wctu1.jpg";
import cars from "../asset/carData";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: 400,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    /*contain= Resize the background image to make sure the 
    image is fully visible
    cover=	Resize the background image to cover the entire container, even 
    if it has to stretch the image or cut a little bit off one of the edges*/
    backgroundPosition: "center",

    width: "100%",
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
    padding: theme.spacing(3),
  },
  text: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
    fontFamily: "lato",
  },
}));

export default function SearchCar() {
  const classes = useStyles();
  const theme = useTheme();
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
      <Box display="flex" justifyContent="center">
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
        <Autocomplete
          id="car"
          style={{
            width: "100%",
            background: fade(theme.palette.common.white, 0.5),
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
        <p className={classes.navlink} style={{ textAlign: "left" }}>
          eg: Hyundai
          <span style={{ float: "right" }}>
            <NavLink className={classes.navlink} to="/newcar">
              Not sure? Visit here.
            </NavLink>
          </span>
        </p>
      </div>
    </Container>
  );
}
