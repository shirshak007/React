import React from "react";
import { makeStyles, Typography, Box, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: "400px",
    background: "grey",
    backgroundImage: `url(${"https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini.jpg"})`,
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
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
    color: Theme.palette.background.darkBlue,
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
        <p className={classes.text} style={{ textAlign: "left" }}>
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

const cars = [
  { title: "The Shawshank Redemption", year: 1994, actors: ["John", "sam"] },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
];
