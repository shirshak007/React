//child component of home where large search box is located
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Box,
  Container,
  Radio,
  FormControlLabel,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Grid,
  IconButton,
} from "@material-ui/core";
import Axios from "axios";

import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
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
  const history = useHistory();
  const [CarName, setCarName] = React.useState(""); //to get the selected carname
  const [CarName1, setCarName1] = React.useState(null); //the autocomplete textfield variable to get the selected carname
  const [selectedValue, setSelectedValue] = React.useState("newcar"); //to get radio button value
  const [CarData, setCarData] = React.useState([]); //to hold the data from api / database
  //handling change of radio button
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  //handling the submit button press
  const handleSubmit = () => {
    if (selectedValue === "newcar" && CarName.length > 0) {
      history.push("/car/" + CarName); //if newcar selected then redirect to showsinglenewcar page
    } else if (selectedValue === "usedcar" && CarName.length > 0) {
      history.push("/oldcar/" + CarName); //if usedcar selected then redirect to showsingleusedcarsearch page
    } else history.push("/"); //if nothing in the textfield
  };
  async function getCarName() {
    const config = {
      method: "get",
      url:
        "https://private-anon-50a794b9c7-carsapi1.apiary-mock.com/manufacturers",
      headers: {},
    };
    await Axios(config)
      .then((res) => {
        setCarData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log("done");
  }
  useEffect(() => {
    getCarName();
    // console.log(Brand);
  }, [CarName]);
  const defaultProps = {
    options: cars,
    getOptionLabel: (option) => option.title,
  };

  console.log(selectedValue, CarName, CarName1); //this cardata1 gives an object..
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
      {/*------------------this part is problamatic-----------------------*/}
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={CarName1}
        onChange={(event, newValue) => {
          setCarName1(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" margin="normal" />
        )}
      />
      {/*this part iw\s working fine*/}
      <div className={classes.search}>
        <div className={classes.searchbox}>
          <Grid container>
            <Grid style={{ boxShadow: "10px 10px 5px grey" }} item xs={11}>
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Search Car
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={CarName}
                  onChange={(e) => setCarName(e.target.value)}
                  label="Select Brand"
                >
                  {CarData.map((Car) => (
                    <MenuItem
                      style={{ paddingLeft: "10px" }}
                      key={Car.id}
                      value={Car.name}
                    >
                      {Car.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleSubmit} component="span">
                <SearchIcon
                  style={{ boxShadow: "10px 10px 5px grey" }}
                  fontSize="large"
                />
              </IconButton>
            </Grid>
          </Grid>
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
