import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  CardContent,
  Card,
  Container,
  Box,
  Grid,
  Popover,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Rating from "@material-ui/lab/Rating";
import UsedCarOverview from "./UsedCarOverview";
import KeySpecificationUsedCar from "./KeySpecificationUsedCar";

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
    paddingTop: "20px",
    color: Theme.palette.background.darkBlue,
  },
  card: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  ribbontext: {
    fontFamily: "lato",
    fontSize: 12,
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
  button: {
    color: "white",
    background: "linear-gradient(45deg, #d65600 30%, #FF8E53 90%)",
    "&:hover": {
      backgroundColor: "#00698c",
    },
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
  //DIALOG BOX-------------------------------------------------------------
  const [OpenDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  //-set name---------------------------------------------------------------------------
  const [name, setName] = React.useState("");
  const handleChangeName = (value) => {
    setName(value);
  };
  //-set email---------------------------------------------------------------------------
  const [email, setEmail] = React.useState("");
  const handleChangeEmail = (value) => {
    setEmail(value);
  };
  //-set phone---------------------------------------------------------------------------
  const [mobile, setMobile] = React.useState("");
  const handleChangeMobile = (value) => {
    setMobile(value);
  };
  //Snakcbar-------------------------------------------------------------------------------------
  const [OpenSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickSubmit = () => {
    console.log(name, email, mobile); //here the server side operation can be performed
    setOpenDialog(false); //onsubmit dialog close
    setOpenSnackbar(true); //open snackbar with message
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className={classes.root}>
      {sellingCarData.map((car) => {
        if (car.id === props.id) {
          return (
            //mail container
            <Container key={car.id} className={classes.container}>
              <div className={classes.paper}>
                <Typography className={classes.typography} variant="h4">
                  {car.title}
                </Typography>
              </div>
              <Card className={classes.card}>
                {/*----------------large image---------------------*/}
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
                {/*----------content of the card--------------*/}
                <CardContent>
                  {/*--------------------left side grid of the card--------------------*/}
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/*moneyback and warrenty*/}
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          {/*---------------------Moneyback div--------------*/}
                          <div
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              borderRadius: 10,
                              boxShadow: "5px 5px 5px #3b9c4a",
                              padding: "5px",
                              textAlign: "center",
                            }}
                          >
                            <CheckCircleIcon className={classes.ribbontext} />
                            Money Back
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          {/*---------------------Warranty div--------------*/}
                          <div
                            style={{
                              backgroundColor: "#00638a",
                              color: "white",
                              borderRadius: 10,
                              boxShadow: "5px 5px 5px #387a94",
                              padding: "5px",
                              textAlign: "center",
                            }}
                          >
                            6Month Warranty
                          </div>
                        </Grid>
                      </Grid>
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
                        {/*this popover show the rating*/}
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
                    </Grid>
                    {/*--------------------right side grid of the card--------------------*/}
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                    >
                      {/*-----------------offer details----------------*/}
                      <Typography
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          fontSize: "12px",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <SentimentVerySatisfiedIcon />
                        Expert Review - This car is a Great Buy as per current
                        market demand & trends. Pre-owned cars of the same Make,
                        Model, Year and Condition are priced above this.
                      </Typography>
                      {/*--------------the offer button-----------------------*/}
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        onClick={handleClickOpenDialog}
                      >
                        MAKE AN OFFER
                      </Button>
                      {/*DIALOG BOX to take user details-----------------------------------------------------------------*/}
                      <Dialog
                        open={OpenDialog}
                        onClose={handleCloseDialog}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">
                          Make an Offer
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Submit your details
                          </DialogContentText>
                          <TextField
                            autoFocus
                            color="secondary"
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(e) => handleChangeName(e.target.value)}
                          />
                          <TextField
                            margin="dense"
                            color="secondary"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                          />
                          <TextField
                            margin="dense"
                            color="secondary"
                            id="mobile"
                            label="Mobile No"
                            type="mobile"
                            fullWidth
                            value={mobile}
                            onChange={(e) => handleChangeMobile(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseDialog} color="secondary">
                            Cancel
                          </Button>
                          <Button onClick={handleClickSubmit} color="secondary">
                            Submit
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {/*Overview child component------------------------------------------------*/}
              <UsedCarOverview id={car.id} />
              {/*Key specs-----------------------------------------------*/}
              <KeySpecificationUsedCar id={car.id} />
            </Container>
          );
        }
        return null;
      })}
      {/*SnackBar*-------------------------------------------*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={OpenSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Details Submitted"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
