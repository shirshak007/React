import React from "react";

import {
  makeStyles,
  withStyles,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import clsx from "clsx";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import StepConnector from "@material-ui/core/StepConnector";
import Theme from "./Theme";

import image1 from "../asset/svg/undraw_teaching_f1cm.svg";
import image2 from "../asset/svg/undraw_electric_car_b7hl.svg";
import image3 from "../asset/svg/undraw_business_deal_cpi9.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  grid: {
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  gridpaper: {
    /*Change the height and width here to reflect changes */
    height: 240,
    width: 265,
  },
  control: {
    padding: theme.spacing(2),
  },
  imagebox: {
    width: "33%",
    height: 200 /*change the height always 30-40 pixex less than gridpaper. It contains the title of image*/,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
  },
}));
const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: 25,
      height: 25,
    },
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AddShoppingCartIcon />,
    2: <AirlineSeatReclineExtraIcon />,
    3: <DriveEtaIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,

    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

function getSteps() {
  return ["Online Evaluation", "Free Inspection", "Sell car in an hour"];
}
export default function SellCar(props) {
  const classes = useStyles();

  const steps = getSteps();

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h6">
          SELL CAR IN THREE EASY STEPS
        </Typography>
      </div>
      <div>
        <Grid className={classes.grid} item xs={12}>
          <div className={classes.imagebox}>
            <img
              className={classes.image}
              src={image1}
              alt="image_evaluation"
            />
          </div>

          <div className={classes.imagebox}>
            <img
              className={classes.image}
              src={image2}
              alt="image_inspection"
            />
          </div>

          <div className={classes.imagebox}>
            <img className={classes.image} src={image3} alt="image_deal" />
          </div>
        </Grid>
      </div>
      <div style={{ width: "100%" }}>
        <Stepper
          alternativeLabel
          activeStep={2}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </Container>
  );
}
