import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NotFoundGif from "../asset/gif/404.gif";
import Theme from "./Theme";
import Helmet from "react-helmet";
import Axios from "axios";
//this component is rendered when the user types invalid url
/*CUSTOM STYLE*/

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
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paperleft: {
    marginTop: theme.spacing(2),
    width: "100%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paperright: {
    marginTop: theme.spacing(2),
    width: "50%",
    display: "flex",
    fontSize: 20,
    fontFamily: "lato",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    backgroundColor: Theme.palette.background.darkBlue,
    color: "white",
  },

  imagebox: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  const handleClickReturnHome = (event) => {
    event.preventDefault();
    history.push("/");
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
      url: "http://garidakho.com/new_api/page_seo/?id=20",
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
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <div className={classes.paperleft}>
              <div className={classes.imagebox}>
                <img
                  className={classes.image}
                  width="320"
                  height="240"
                  src={NotFoundGif}
                  alt="404 Not Found"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.paperright}>
              <Typography component="h1" variant="h3">
                404
              </Typography>
              <Typography variant="h5">Uh Oh! You are lost.</Typography>
              <Typography variant="body2">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </Typography>
              <Button
                onClick={handleClickReturnHome}
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                RETURN HOME
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
