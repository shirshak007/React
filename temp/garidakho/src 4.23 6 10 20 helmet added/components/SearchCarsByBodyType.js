import React from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  Tab,
  Tabs,
  Box,
  CardContent,
  ListItem,
  Card,
  Divider,
} from "@material-ui/core";
//import axios from "axios"; //if needed

import Theme from "./Theme";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import sellingCarData from "../asset/sellingCarData";
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
  imagebox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
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

  formControl: {
    width: "100%",
  },
}));

export default function SearchCarsByBodyType(props) {
  const classes = useStyles();
  const history = useHistory();

  const bull = <span className={classes.bullet}>•</span>;

  /*here goes the body filter index
  -------------------------------------------------------------------------------------*/

  const [FilterTabIndex, setFilterTabIndex] = React.useState(0);
  const [FilterTabName, setFilterTabName] = React.useState("Sedan");

  const handleChangeFilterTabIndex = (event, newFilterTabIndex) => {
    setFilterTabIndex(newFilterTabIndex);
    setFilterTabName(
      newFilterTabIndex === 0
        ? "Sedan"
        : "" || newFilterTabIndex === 1
        ? "Coupe"
        : "" || newFilterTabIndex === 2
        ? "Minivan"
        : "" || newFilterTabIndex === 3
        ? "SUV"
        : ""
    );
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
        SEARCH CARS BY BODY TYPE
      </Typography>
      <Tabs
        value={FilterTabIndex}
        onChange={handleChangeFilterTabIndex}
        scrollButtons="on"
        aria-label="tabs"
        style={{
          color: "black",
        }}
      >
        <Tab
          style={{
            borderTopLeftRadius: 10,

            background:
              FilterTabIndex === 0 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
            color: FilterTabIndex === 0 ? "white" : "black",
          }}
          label="SEDAN"
          {...showtab(0)}
        />
        <Tab
          style={{
            background:
              FilterTabIndex === 1 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
            color: FilterTabIndex === 1 ? "white" : "black",
          }}
          label="COUPE"
          {...showtab(1)}
        />
        <Tab
          style={{
            background:
              FilterTabIndex === 2 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
            color: FilterTabIndex === 2 ? "white" : "black",
          }}
          label="MINIVAN"
          {...showtab(2)}
        />
        <Tab
          style={{
            borderTopRightRadius: 10,
            background:
              FilterTabIndex === 3 ? "rgba(0, 114, 156, 0.9)" : "#dae6eb",
            color: FilterTabIndex === 3 ? "white" : "black",
          }}
          label="SUV"
          {...showtab(3)}
        />
      </Tabs>
      {/*Tab panels renders according to filter*/}

      <div>
        <Grid container spacing={5}>
          {sellingCarData.map((car) => {
            if (
              /*Here goes all the query*/

              car.body === FilterTabName
            ) {
              return (
                <Grid key={car.id} item xs={6} sm={6} md={4} lg={4}>
                  <ListItem
                    disableGutters
                    button
                    key={car.id}
                    onClick={() => handleClickSingleCar(car.id, car.title)}
                  >
                    <Card className={classes.card}>
                      <Paper className={classes.media}>
                        <div className={classes.imagebox}>
                          <img
                            className={classes.image}
                            width="960"
                            height="540"
                            src={car.img}
                            alt={car.title}
                          />
                        </div>
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
                      </Paper>

                      <CardContent>
                        <Typography
                          className={classes.cardtypography}
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
      </div>
    </div>
  );
}
