import React, { useEffect } from "react";
//import { useHistory } from "react-router-dom";

import {
  makeStyles,
  Typography,
  Box,
  ListItem,
  Divider,
} from "@material-ui/core";
//import axios from "axios"; //if needed
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
  content: {
    height: 50,
    paddingBottom: "5%", // 16:9
    cursor: "pointer",
  },
}));

export default function LatestCars(props) {
  const classes = useStyles();
  //const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  //checking if component is mounted or not
  const [isOnline, setIsOnline] = React.useState(false);
  useEffect(() => {
    setOnline();
  }, []);
  function setOnline() {
    setIsOnline(true);
  }

  const handleClickSingleCar = (SingleCarId, SingleCarTitle) => {
    //setIsOnline(false);
    //history.push("/car/" + SingleCarId); //either pass id of name which is unique
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
        {isOnline ? (
          <InfiniteCarousel
            dots={true}
            arrows={true}
            style={{ backgroundColor: "#6b6b6bs" }}
            breakpoints={[
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
            ]}
            sidesOpacity={0.8}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
          >
            {sellingCarData.map((car) => (
              <Box
                key={car.id}
                onClick={() => handleClickSingleCar(car.id, car.title)}
                className={classes.card}
              >
                <ListItem button className={classes.media}>
                  <div className={classes.imagebox}>
                    <img
                      className={classes.image}
                      width="960"
                      height="540"
                      src={car.img}
                      alt={car.title}
                    />
                  </div>
                </ListItem>

                <div style={{ padding: "20px" }}>
                  <Typography
                    className={classes.content}
                    variant="h6"
                    component="h2"
                  >
                    {car.title}
                    {bull}
                    <br />₹{car.price}
                  </Typography>
                  <Typography
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {car.distance} km
                    {bull}
                    {car.fuel}
                    {bull}Owner {car.owner}
                  </Typography>
                </div>
              </Box>
            ))}
          </InfiniteCarousel>
        ) : null}
      </div>
    </div>
  );
}
