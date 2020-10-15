import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  makeStyles,
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Theme from "./Theme";
import backgroundImg from "../asset/svg/city-driver-concept-illustration_114360-1209.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    //The Main container
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    //where the grid is shown
    marginTop: theme.spacing(2),
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperleft: {
    //the left grid
    marginTop: theme.spacing(2),
    paddingBottom: "20px",
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "linear-gradient(to bottom right,#c2fff0, #99ff99)",
    backgroundImage: `url(${backgroundImg})`,
    height: "450px",
    marginRight: "20px",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "30vw",
  },
  paperleftcontent: {
    //left paper grid content
    paddingLeft: "50px",
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
  },
  paperright: {
    //the right grid
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    //the icon at he top of the grid
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    //the form input
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    //the submit button
    margin: theme.spacing(3, 0, 2, 0),
    backgroundColor: Theme.palette.background.darkBlue,
  },
  link: {
    //all the link to style the text and remove the underline
    display: "flex",
    flexDirection: "row",
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
    paddingBottom: "15px",
  },
}));

export default function ContactUs() {
  const classes = useStyles();
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
  //function call to change tags
  useEffect(() => {
    // console.log("error");
    handleChangeHelmetTags();
  }, []);
  //changes of tag
  function handleChangeHelmetTags() {
    setHelmetTags({
      title: "Garidakho|Contact",
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
        <Typography variant="h4">CONTACT US</Typography> {/*Heading */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <div className={classes.paperleft}>
              <Avatar className={classes.avatar}>
                <ContactSupportIcon />
              </Avatar>
              <h5>Connect With Us</h5>

              <div className={classes.paperleftcontent}>
                <a
                  className={classes.link}
                  key="Email"
                  component="a"
                  href="mailto:garidakho@gmail.com"
                >
                  <MailIcon />
                  <Typography className={classes.typography}>
                    garidakho@gmail.com
                  </Typography>
                </a>

                <a
                  className={classes.link}
                  key="phone"
                  component="a"
                  href="tel:+919062532279"
                >
                  <CallIcon />
                  <Typography> +91 90625 32279</Typography>
                </a>

                <a
                  className={classes.link}
                  key="fb"
                  component="a"
                  href="https://www.facebook.com/garidakho/"
                >
                  <FacebookIcon />
                  <Typography>Gari Dakho PVT LTD</Typography>
                </a>

                <a
                  className={classes.link}
                  key="wa"
                  component="a"
                  href="https://api.whatsapp.com/send?phone=919062532279"
                >
                  <WhatsAppIcon />
                  <Typography>+919062532279</Typography>
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={6}>
            <div className={classes.paperright}>
              <Avatar className={classes.avatar}>
                <MailIcon />
              </Avatar>
              <h5>Write to Us</h5>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Phone No"
                  name="Phone"
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
