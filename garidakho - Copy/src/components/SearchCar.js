import React from "react";
import { makeStyles, Typography, Box, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import Image from "../asset/images/background.jpg";
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
    color: "black",
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
    color: "black",
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),
  },
}));

export default function SearchCar(props) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("newcar");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [value, setValue] = React.useState(null);
  const filter = createFilterOptions();
  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          FIND THE RIGHT CAR
        </Typography>
      </div>
      <Box display="flex" justifyContent="center">
        <FormControlLabel
          className={classes.text}
          value="start"
          control={
            <Radio
              className={classes.text}
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
          className={classes.text}
          value="start"
          control={
            <Radio
              className={classes.text}
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
          style={{ width: "100%", backgroundColor: "white" }}
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            // Suggest the creation of a new value
            if (params.inputValue !== "") {
              filtered.push({
                inputValue: params.inputValue,
                title: `Add "${params.inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="search"
          options={cars}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }

            if (option.inputValue) {
              return option.inputValue;
            }

            return option.title;
          }}
          renderOption={(option) => option.title}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Cars Here..."
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
