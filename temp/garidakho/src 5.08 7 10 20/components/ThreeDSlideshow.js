import React, { useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import { makeStyles, Typography, Container } from "@material-ui/core";
//import { useHistory } from "react-router-dom";

import Theme from "./Theme";
import slideData from "../asset/slideData";

/*Custom Style*/
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  slidepaper: {
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "black",
  },
  typography: {
    marginTop: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  navlink: {
    color: "black",
    textDecoration: "inherit",
    padding: theme.spacing(0, 1),

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  slidetext: {
    padding: theme.spacing(0, 1),

    color: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
    padding: "20px",
  },
  slide: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  imagebox: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

export default function ThreeDSlideshow(props) {
  const classes = useStyles();
  //const history = useHistory();
  function onSlideClick(id) {
    //history.push("/car/" + id);
  }
  const [isOnline, setIsOnline] = React.useState(false); //checking if component is mounted or not
  useEffect(() => {
    setOnline();
  }, []);
  function setOnline() {
    setIsOnline(true);
  }
  console.log(isOnline);
  return (
    <Container className={classes.root}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          LATEST ARRIVAL
        </Typography>
      </div>

      <div className={classes.center}>
        <div className={classes.slide} style={{ backgroundColor: "#363636" }}>
          {isOnline ? (
            <Carousel
              slides={slideData.map((slide) => (
                <div
                  className={classes.slidepaper}
                  onClick={() => onSlideClick(slide.title)}
                >
                  <div className={classes.imagebox}>
                    <img
                      className={classes.image}
                      width="960"
                      height="540"
                      src={slide.img}
                      alt={slide.title}
                    />
                  </div>
                  <div className={classes.slidetext}>
                    <Typography variant="h5">{slide.title}</Typography>
                    <Typography variant="body2" component="p">
                      {slide.desc}
                    </Typography>
                  </div>
                </div>
              ))}
              autoplay={true}
              interval={3000}
            />
          ) : null}
        </div>
      </div>
    </Container>
  );
}
