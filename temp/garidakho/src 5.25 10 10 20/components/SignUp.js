import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";
import qs from "qs";
import Axios from "axios";
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
    width: "60%",
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
    backgroundColor: theme.palette.background.darkBlue,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: theme.palette.background.darkBlue,
    color: "#fff",
  },
  navlink: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

// function func1() {
//   if (document.getElementById("first") === "") {
//     alert("First Name field should not be empty");
//   }
//   if (!isNaN(document.getElementById("first"))) {
//     alert("First Name field should not be numeric");
//   }
//   if (document.getElementById("last") === "") {
//     alert("Last Name field should not be empty");
//   }
//   if (!isNaN(document.getElementById("last"))) {
//     alert("Last Name field should not be numeric");
//   }
// }

export default function SignIn() {
  const classes = useStyles();
  //put these values into database
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [PIN, setPIN] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");

  const [IP, setIP] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  const handleChangePassword = (value) => {
    setPassword(value);
  };
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
      url: "http://garidakho.com/new_api/page_seo/?id=14",
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
  //post method
  const UserSignUp = async () => {
    // var config = {
    //   method: "post",
    //   headers: { "Content-Type": "application/x-www-form-urnlencoded" },
    //   URL: "http://gari_dakho_api.test/api/gd_users/",
    // };
    // data = qs.stringify({
    //   method: "email",
    //   name: FirstName + " " + LastName,
    //   username: UserName,
    //   email: Email,
    //   password: Password,
    //   address: Address,
    //   phone: Phone,
    //   country: Country,
    //   state: State,
    //   pin: PIN,
    //   gender: Gender,
    //   ip: "1",
    //   lat: Latitude,
    //   lon: Longitude,
    // });
  };
  //function call
  useEffect(() => {
    // console.log("error");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Location not available");
    }
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
          <PermIdentityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                value={FirstName}
                id="first"
                label="First Name"
                name="first"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                value={LastName}
                fullWidth
                id="last"
                label="Last Name"
                name="last"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Phone}
            id="Phone"
            label="Phone No"
            name="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Email}
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
            value={UserName}
            id="UserName"
            label="UserName"
            name="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Address}
            id="Address"
            label="Address"
            name="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                required
                fullWidth
                value={PIN}
                id="pin"
                label="PIN Code"
                name="pin"
                onChange={(e) => setPIN(e.target.value)}
              />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={4}
            >
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="States">Select State</InputLabel>
                <Select
                  labelId="States"
                  id="State"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  label="Select State"
                >
                  {StateData.map((State) => (
                    <MenuItem
                      style={{ paddingLeft: "10px" }}
                      key={State.name}
                      value={State.name}
                    >
                      {State.name} ({State.key})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              item
              xs={6}
              sm={4}
            >
              <FormControl
                variant="outlined"
                color="secondary"
                style={{ width: "100%" }}
              >
                <InputLabel id="States">Select Country</InputLabel>
                <Select
                  labelId="Country"
                  label="Select Country"
                  id="Country"
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="India">India</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <FormControl
            variant="outlined"
            color="secondary"
            style={{ width: "100%" }}
          >
            <InputLabel id="States">Select Gender</InputLabel>
            <Select
              labelId="Gender"
              id="Gender"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              label="Select Gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="NA">Don't Disclose</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            value={Password}
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => handleChangePassword(e.target.value)}
            autoComplete="current-password"
          />
          {/*--------------------------Password checking----------------------------*/}
          <div>
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
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={UserSignUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <NavLink className={classes.navlink} to="/login" variant="body2">
                {"Already have an account? Login"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

const StateData = [
  {
    key: "AN",
    name: "Andaman and Nicobar Islands",
  },
  {
    key: "AP",
    name: "Andhra Pradesh",
  },
  {
    key: "AR",
    name: "Arunachal Pradesh",
  },
  {
    key: "AS",
    name: "Assam",
  },
  {
    key: "BR",
    name: "Bihar",
  },
  {
    key: "CG",
    name: "Chandigarh",
  },
  {
    key: "CH",
    name: "Chhattisgarh",
  },
  {
    key: "DH",
    name: "Dadra and Nagar Haveli",
  },
  {
    key: "DD",
    name: "Daman and Diu",
  },
  {
    key: "DL",
    name: "Delhi",
  },
  {
    key: "GA",
    name: "Goa",
  },
  {
    key: "GJ",
    name: "Gujarat",
  },
  {
    key: "HR",
    name: "Haryana",
  },
  {
    key: "HP",
    name: "Himachal Pradesh",
  },
  {
    key: "JK",
    name: "Jammu and Kashmir",
  },
  {
    key: "JH",
    name: "Jharkhand",
  },
  {
    key: "KA",
    name: "Karnataka",
  },
  {
    key: "KL",
    name: "Kerala",
  },
  {
    key: "LD",
    name: "Lakshadweep",
  },
  {
    key: "MP",
    name: "Madhya Pradesh",
  },
  {
    key: "MH",
    name: "Maharashtra",
  },
  {
    key: "MN",
    name: "Manipur",
  },
  {
    key: "ML",
    name: "Meghalaya",
  },
  {
    key: "MZ",
    name: "Mizoram",
  },
  {
    key: "NL",
    name: "Nagaland",
  },
  {
    key: "OR",
    name: "Odisha",
  },
  {
    key: "PY",
    name: "Puducherry",
  },
  {
    key: "PB",
    name: "Punjab",
  },
  {
    key: "RJ",
    name: "Rajasthan",
  },
  {
    key: "SK",
    name: "Sikkim",
  },
  {
    key: "TN",
    name: "Tamil Nadu",
  },
  {
    key: "TS",
    name: "Telangana",
  },
  {
    key: "TR",
    name: "Tripura",
  },
  {
    key: "UP",
    name: "Uttar Pradesh",
  },
  {
    key: "UK",
    name: "Uttarakhand",
  },
  {
    key: "WB",
    name: "West Bengal",
  },
];
