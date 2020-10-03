import React from "react";
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  ListItem,
  Divider,
} from "@material-ui/core";
//import axios from "axios"; //if needed

import Theme from "./Theme";

import iconDataBrand from "../asset/iconDataBrand";
import "../asset/ribbon.css";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),

    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    boxShadow: "2px 5px 5px grey",
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

  ribbontext: {
    fontFamily: "lato",
    fontSize: 12,
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    width: "100%",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  gridpaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
  },
  formControl: {
    width: "100%",
  },
  imagebox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function FindOffersOnTopBrand(props) {
  const classes = useStyles();
  const history = useHistory();

  /*This function is used to open a single car dialog box or dynamically navigate to new page
  ----------------------------------------------------------------*/
  // const [OpenSingleCar, setOpenSingleCar] = React.useState(false);
  // const [SingleCarId, setSingleCarId] = React.useState("");
  // const handleCloseSingleCar = () => {
  //   setOpenSingleCar(!OpenSingleCar);
  // };
  const handleClickSingleCar = (SingleCarTitle) => {
    history.push("/car/" + SingleCarTitle); //either pass id of name which is unique
    //history.push("/car/" + SingleCarTitle);
    // setOpenSingleCar(!OpenSingleCar); // it is needed when using dialog box
    // setSingleCarId(SingleCarId);
  };

  /*This function resets all filters
  ----------------------------------------------------------------*/

  //add new filters reset here

  /*These assignments are used so that the query becomes easier
  ----------------------------------------------------------------*/

  return (
    <div className={classes.container}>
      <Divider />
      <Typography variant="h5" style={{ margin: "10px 20px 20px 0px" }}>
        SEARCH CARS BY BRAND
      </Typography>
      <Grid container spacing={2}>
        {/*The mapping function for cycle through the data object*/}
        {iconDataBrand.map((car) => (
          <Grid key={car.img} item xs={3} sm={2} lg={2}>
            <ListItem
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              disableGutters
              button
              onClick={() => handleClickSingleCar(car.title)}
            >
              <Paper className={classes.gridpaper}>
                <div className={classes.imagebox}>
                  <img
                    className={classes.image}
                    src={car.img}
                    alt={car.title}
                  />
                </div>
              </Paper>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
