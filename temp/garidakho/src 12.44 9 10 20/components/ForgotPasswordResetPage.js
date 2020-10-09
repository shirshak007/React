//deal with user who clicked forgot password in login page
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  makeStyles,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    width: "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "green",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    background: theme.palette.background.darkBlue,
    color: "#fff",
  },
  navlink: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const [Password, setPassword] = useState(""); //replace by database
  const [ConfirmPassword, setConfirmPassword] = useState(""); //replace by database
  const [Color, setColor] = useState("secondary");
  const [Matched, setMatched] = useState("Password Not Matched");
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

  //changes

  function handleChangeHelmetTags() {
    setHelmetTags({
      title: "Garidakho|Reset_Password",
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

  const handleChangePassword = (value) => {
    setPassword(value);
  };
  const handleChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  // console.log(Password, ConfirmPassword, Color);
  const handleClickSubmit = () => {
    if (Password === ConfirmPassword) {
      setPassword(Password);
      alert("Password Changed");
    } else alert("Password Not matched");
  };
  useEffect(() => {
    // console.log("error");
    handleChangeHelmetTags();
    //function included to remove error "React Hook useEffect has a missing dependency"
    function handleChangeColor() {
      setColor(
        Password === ConfirmPassword && Password.length > 0 ? "green" : "red"
      );
      setMatched(
        Password === ConfirmPassword && Password.length > 0
          ? "Password Matched"
          : "Password Not Matched"
      );
    }
    handleChangeColor();
  }, [Password, ConfirmPassword]);
  return (
    <div className={classes.container}>
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HelpOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          RESET PASSWORD
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                fullWidth
                type="password"
                value={Password}
                id="Password"
                label="Password"
                name="Password"
                onChange={(e) => handleChangePassword(e.target.value)}
              />

              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                fullWidth
                value={ConfirmPassword}
                name="ConfirmPassword"
                label="Confirm Password"
                type="password"
                id="ConfirmPassword"
                onChange={(e) => handleChangeConfirmPassword(e.target.value)}
              />
              <div
                style={{
                  padding: "5px",
                  backgroundColor: Color,
                  color: "white",
                }}
              >
                {Matched}
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleClickSubmit}
              >
                Submit
              </Button>
            </form>
          </Grid>
          {/*--------------------------Managing the password characteristics------------------*/}
          <Grid style={{ paddingTop: "30px" }} item xs={6}>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must be 8 character long" />
                <ListItemIcon>
                  {/*---------------------checking password length--------------------*/}
                  {Password.length >= 8 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one uppercase letter" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one upper case------------------*/}
                  {Password.toLowerCase() !== Password &&
                  Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one lowercase letter" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one upper case------------------*/}
                  {Password.toUpperCase() !== Password &&
                  Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <List disablePadding dense={true}>
              <ListItem>
                <ListItemText secondary="Password must contain one number" />
                <ListItemIcon>
                  {/*----------------Checking if password contain one number using regular expression------------------*/}
                  {Password.match(/\d+/g) && Password.length > 0 ? (
                    <DoneAllIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
