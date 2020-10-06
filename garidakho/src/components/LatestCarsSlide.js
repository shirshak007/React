import React from "react";
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  CardContent,
  ListItem,
  Card,
  Divider,
} from "@material-ui/core";
//import axios from "axios"; //if needed
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfiniteCarousel from "react-leaf-carousel";
import Theme from "./Theme";
import sellingCarData from "../asset/sellingCarData";

import "../asset/ribbon.css";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
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

export default function LatestCars(props) {
  const classes = useStyles();
  const history = useHistory();

  const bull = <span className={classes.bullet}>•</span>;

  const handleClickSingleCar = (SingleCarId, SingleCarTitle) => {
    history.push("/car/" + SingleCarId); //either pass id of name which is unique
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
        LATEST CARS
      </Typography>
      <div style={{ width: "90vw" }}>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          {sellingCarData.map((car) => (
            <Card
              key={car.id}
              onClick={() => handleClickSingleCar(car.id, car.title)}
              className={classes.card}
            >
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {car.distance} km
                  {bull}
                  {car.fuel}
                  {bull}Owner {car.owner}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </InfiniteCarousel>
      </div>
    </div>
  );
}
