import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useHistory } from "react-router-dom";
import {
  makeStyles,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Cookies, useCookies } from "react-cookie";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import google from "../asset/svg/google.png";
import facebook from "../asset/svg/facebook.png";
import Axios from "axios";
import qs from "qs";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
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
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.darkBlue,
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
  gridborder: {
    borderLeft: `3px solid ${theme.palette.divider}`,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      borderTop: `3px solid ${theme.palette.divider}`,
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]); //on successful login setcookie
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
      url: "http://garidakho.com/new_api/page_seo/?id=13",
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
  //handling login
  const UserLogin = async () => {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/gd_users/?method=email&email=" +
        Email +
        "&password=" +
        Password,
      headers: {},
    };

    Axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.success));

        if (response.data.success) {
          setCookies(Email, Password);
        }
      })
      .catch(function (error) {
        console.log(error);
        cookies.token = "";
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
  const setCookies = (Email, Password) => {
    //this manages if user is logged in he never sees login page.. auto redirect to home

    var token = CryptoJS.MD5("krishna").toString();
    var data = qs.stringify({
      token: token,
      email: Email,
      expire_on: new Date(new Date().getTime() + 172800000),
      password: Password,
    });
    var config = {
      method: "post",
      url: "http://garidakho.com/new_api/cookie_data/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    Axios(config)
      .then(function (response) {
        if (response.data.success) {
          // console.log(token);s
          setCookie("token", token, { path: "/" }); //setting the cookie, this name will be shown in home
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //is loggedin
  const isLoggedIn = () => {
    console.log(cookies.get("token", { path: "/" }));
    // var config = {
    //   method: "get",
    //   url: "http://garidakho.com/new_api/cookie_data/?token=" + cookies.token,
    //   headers: {},
    // };
    // Axios(config)
    //   .then(function (response) {
    //     //NEED FIX------------------------------
    //     console.log(JSON.stringify(response.data));
    //     if (response.data.token == cookies.token) {
    //       history.push("/");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  //function call
  useEffect(() => {
    // console.log("error");
    page_details();
    isLoggedIn();
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
        {/*Top avatar of login form*/}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          style={{ paddingBottom: "30px" }}
          component="h1"
          variant="h5"
        >
          Login
        </Typography>
        {/*body of login form-----------------------*/}
        <div className={classes.form}>
          <Grid container spacing={6}>
            {/*-----------------left side of the form where normal login----------*/}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={UserLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <NavLink
                    className={classes.navlink}
                    to="/forgotpassword"
                    variant="body2"
                  >
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink
                    className={classes.navlink}
                    to="/signup"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
            {/*------------------right side of the form where fb and google login----------------*/}
            <Grid className={classes.gridborder} item xs={12} sm={6}>
              Or,
              <List dense={true}>
                <ListItem button>
                  <ListItemAvatar>
                    <img src={google} height={30} width={30} alt="google" />
                  </ListItemAvatar>
                  <ListItemText primary="Sign in with Google" />
                </ListItem>

                <ListItem button>
                  <ListItemAvatar>
                    <img src={facebook} height={30} width={30} alt="facebook" />
                  </ListItemAvatar>
                  <ListItemText primary="Sign in with Facebook" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
