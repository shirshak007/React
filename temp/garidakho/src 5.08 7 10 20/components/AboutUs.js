import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../asset/svg/thumbimg_25337903thumbejpg.jpg";

/*CUSTOM STYLES*/

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "linear-gradient(to bottom right,#c2fff0, #99ff99)",
    backgroundImage: `url(${backgroundImg})`,

    marginRight: "20px",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperleft: {
    marginTop: theme.spacing(2),
    paddingBottom: "20px",
    width: "100%",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
  },
  paperleftcontent: {
    padding: "10px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    fontSize: 15,
    fontFamily: "lato",
    backgroundColor: "#ffffff",
    opacity: 0.8,
    textAlign: "justify",
    textIndent: "30px",
  },
  paperright: {
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
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  link: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
    paddingBottom: "15px",
  },
}));

export default function AboutUs() {
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
  //function call
  useEffect(() => {
    // console.log("error");
    handleChangeHelmetTags();
  }, []);
  //changes
  function handleChangeHelmetTags() {
    setHelmetTags({
      title: "Garidakho|About",
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <div className={classes.paperleft}>
              <Typography component="h1" variant="h4">
                ABOUT US
              </Typography>
              <Typography className={classes.paperleftcontent}>
                Gari Dakho Pvt. Ltd. started its journey in 2019 with 3
                energetic youths in Kolkata having the same goal to create a
                brand name in the sector of Passenger and Goods Transportation
                by providing simple solutions to all or any form of problems in
                the sector. That became the tagline of the company as
                “Tran-solution Simplified..!!”
              </Typography>
              <Typography className={classes.paperleftcontent}>
                Since it’s inception “Team Gari Dakho” (as we love to call
                ourselves so..) has always focused on providing “Quality Service
                At an Affordable Price” within the reach of the huge middle
                class segment of our population. Hence in no time we became one
                of the popular names in the sector serving over 5,000 customers
                till date.
              </Typography>

              <div
                className={classes.paperleftcontent}
                style={{ textIndent: "0px" }}
              >
                <strong>Our main business segments are as follows:</strong>
                <ul>
                  <li> Used Car Buy & Sell.</li>
                  <li> Car Insurance / Car Finance Facility.</li>
                  <li> Any Brand Car Service & Maintenance.</li>
                  <li> Doorstep Car Wash.</li>
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.paperright}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
