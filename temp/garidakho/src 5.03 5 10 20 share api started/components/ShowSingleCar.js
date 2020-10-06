import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  CardContent,
  Card,
  Container,
  Box,
  Popover,
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";
import sellingCarData from "../asset/sellingCarData";
import Theme from "./Theme";

/*Custom Style*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
  },
  card: {
    width: "75%",
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  popover: {
    pointerEvents: "none",
  },
  popoverpaper: {
    padding: theme.spacing(1),
    color: "white",
    backgroundColor: Theme.palette.background.darkBlue,
  },
}));

export default function ShowSingleCar(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  /*This anchorEl is to handle the mouse event, on hover it shows the rating*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div className={classes.root}>
      {sellingCarData.map((car) => {
        if (car.id === props.id) {
          return (
            <Container key={car.id} className={classes.container}>
              <div className={classes.paper}>
                <Typography className={classes.typography} variant="h4">
                  {car.title}
                </Typography>
              </div>
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
                </Paper>

                <CardContent>
                  <Typography
                    className={classes.cardtypography}
                    gutterBottom
                    variant="h6"
                    component="h2"
                  >
                    ₹ {car.price}
                  </Typography>
                  <Box
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    component="fieldset"
                    borderColor="transparent"
                  >
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="read-only"
                      defaultValue={
                        /*this is used to show the fraction rating*/
                        (Math.floor(car.rating) + Math.ceil(car.rating)) / 2
                      }
                      precision={0.5}
                      readOnly
                    />
                    <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.popoverpaper,
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>{car.rating}</Typography>
                    </Popover>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {car.distance} km
                    {bull}
                    {car.fuel}
                    {bull}
                    Owner {car.owner}
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          );
        }
        return null;
      })}
    </div>
  );
}
