import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Rating from "@material-ui/lab/Rating";
import KeySpecification from "./KeySpecification";
import sellingCarData from "../asset/sellingCarData";
import Theme from "./Theme";

/*Custom Style*/
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

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
  specs: {
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
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
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
    backgroundColor: "#298a43",
    "&:hover": {
      backgroundColor: "#00698c",
    },
  },
}));

export default function ShowSingleCar(props) {
  const classes = useStyles();
  //-helmet--------------------------------------------------
  //initialization
  const [HelmetTags, setHelmetTags] = React.useState({
    title: "",
    google_site_verification: "",
    keywords: "",
    robots: "",
    content_language: "",
    pragma: "",
    publisher: "",
    copyright: "",
    submission: "",
    abstract: "",
    alias: "",
    type: "",
    source: "",
    use: "",
    distribution: "",
    language: "",
    rating: "",
    revisit_after: "",
    document_class: "",
    document_rights: "",
    document_type: "",
  });
  //function call
  useEffect(() => {
    // console.log("error");
    handleChangeHelmetTags();
  }, []);
  //changes
  function handleChangeHelmetTags() {
    setHelmetTags({
      title: "Garidakho|Car",
      google_site_verification: "",
      keywords: "Business keyword",
      robots: "index,follow,all",
      content_language: "en",
      pragma: "cache",
      publisher: "website url",
      copyright: "copyright 2020 garidakho.com",
      submission: "website url",
      abstract: "website url",
      alias: "website url",
      type: "internet",
      source: "internet service",
      use: "Business",
      distribution: "Global",
      language: "en-us",
      rating: "General",
      revisit_after: "2days",
      document_class: "Published",
      document_rights: "copyrighted work",
      document_type: "Public",
    }); //will be taken from db
    // console.log("error");
  }
  //-----------------------------------------------------

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
      <Helmet>
        <meta name="google-site-verification" content="" />
        <title>{HelmetTags.title}</title>
        <meta name="keywords" content={HelmetTags.keywords} />
        <meta name="robots" content={HelmetTags.robots} />
        <meta name="content-language" content={HelmetTags.language} />
        <meta name="pragma" content={HelmetTags.pragma} />
        <meta name="publisher" content={HelmetTags.publisher} />
        <meta name="copyright" content={HelmetTags.copyright} />
        <meta name="rating" content={HelmetTags.rating} />
        <meta name="submission" content={HelmetTags.submission} />
        <meta name="abstract" content={HelmetTags.abstract} />
        <meta name="alias" content={HelmetTags.alias} />
        <meta name="type" content={HelmetTags.type} />
        <meta name="source" content={HelmetTags.source} />
        <meta name="use" content={HelmetTags.use} />
        <meta name="distribution" content={HelmetTags.distribution} />
        <meta name="language" content={HelmetTags.language} />
        <meta name="revisit_after" content={HelmetTags.revisit_after} />
        <meta name="document_class" content={HelmetTags.document_class} />
        <meta name="document_rights" content={HelmetTags.document_rights} />
        <meta name="document)type" content={HelmetTags.document_type} />
      </Helmet>
      {sellingCarData.map((car) => {
        // if ("/car/" + car.title === props.location.pathname) {
        if (
          "/car/" + car.id === props.location.pathname ||
          "/car/" + car.title === props.location.pathname
          /*here goes all the query matching props*/
        ) {
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
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
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
                    </Grid>
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
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        onClick={handleClickOpenDialog}
                      >
                        View Offers
                      </Button>
                      {/*DIALOG BOX-----------------------------------------------------------------*/}
                      <Dialog
                        open={OpenDialog}
                        onClose={handleCloseDialog}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">
                          Subscribe
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
                      <Typography
                        style={{
                          paddingTop: "20px",
                          fontSize: "12px",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <LocalOfferIcon />
                        Don't miss out on the festive offers this month
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {/*Key specs-----------------------------------------------*/}
              <KeySpecification id={car.id} />
            </Container>
          );
        }
        return "";
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
      {/*Overview------------------------------------------------*/}
    </div>
  );
}
