import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: "300px",
    background: "#0f0f0f",
    // backgroundImage: `url(${"../asset/background.jpg"})`,
  },
  typography: {
    margin: theme.spacing(1),
    color: "white",
  },
  search: {
    padding: theme.spacing(5),
  },
  text: {
    margin: theme.spacing(1),
    color: "white",
  },
}));

export default function NewCar() {
  const classes = useStyles();

  carousel();
  return (
    <Container className={classes.container} maxWidth="lg">
      <h2>Automatic Slideshow</h2>
      <div>
        <img id="images" src="gaadi_front.png" />
        <img id="images" src="Screenshot (1).png" />
        <img id="images" src="Screenshot (3).png" />
      </div>
    </Container>
  );
}
function carousel() {
  var myIndex = 0;
  var i;
  var x = document.getElementsById("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
