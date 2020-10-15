//deal with user who clicked forgot password in login page
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  makeStyles,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Axios from "axios";
import qs from "qs";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red",
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
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [email, setEmail] = useState(""); //replace by database
  const [message, setMessage] = useState(""); //show success message
  //const [mobile, setMobile] = useState(""); //replace by database
  const handleClickSubmit = () => {
    var data = qs.stringify({
      email: email,
    });
    var config = {
      method: "post",
      url: "http://garidakho.com/new_api/forget_password/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        setMessage(response.data.message);
        setOpen(true);
        setEmail("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(message);
  //initialization
  const [HelmetTags, setHelmetTags] = React.useState({
    title: "",
    page_name: "",
    keywords: "",
    page_url: "",
    description: "",
    google_site_verification: "",
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
  const page_details = async () => {
    var config = {
      method: "get",
      url: "http://garidakho.com/new_api/page_seo/?id=21",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        response.data.forEach((element) => {
          handleChangeHelmetTags(element);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //changes

  function handleChangeHelmetTags(element) {
    setHelmetTags({
      title: element.title,
      page_name: element.page_name,
      page_url: element.page_url,
      keywords: element.keywords,
      description: element.description,
      google_site_verification: "",
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

  //function call
  useEffect(() => {
    // console.log("error");

    page_details();
  }, []);
  return (
    <div className={classes.container}>
      <Helmet>
        <meta name="google-site-verification" content="" />
        <title>{HelmetTags.title}</title>
        <meta name="page_name" content={HelmetTags.page_name} />
        <meta name="page_url" content={HelmetTags.page_url} />
        <meta name="keywords" content={HelmetTags.keywords} />
        <meta name="description" content={HelmetTags.description} />
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
        <Typography color="error" component="h1" variant="h5">
          FORGOT PASSWORD ?
        </Typography>
        <Typography variant="body2">
          Reset Link Will be sent to your registered email id
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={email}
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={mobile}
            name="mobile"
            label="Mobile No"
            type="mobile"
            id="mobile"
            onChange={(e) => setMobile(e.target.value)}
          /> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleClickSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
