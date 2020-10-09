import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, Typography, Divider } from "@material-ui/core";

import SearchCar from "./SearchCar";
// import SearchNewCarBy from "./SearchNewCarBy";
// import FeaturedCars from "./FeaturedCars";
import WebSearch from "../asset/svg/undraw_web_search_eetr.svg";
// import Slideshow from "./Slideshow";
import ThreeDSlideshow from "./ThreeDSlideshow";
import WhyChooseUs from "./WhyChooseUs";
import SellCarInThreeSteps from "./SellCarThreeSteps";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import BookAppointment from "./BookAppointment";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchComp: {
    display: "flex",
    flexDirection: "row",
  },
  WebSearchImage: {
    width: "25%",
    paddingRight: 25,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  typography: {
    color: theme.palette.background.darkBlue,
    textDecoration: "inherit",
  },
  sellCar: {
    padding: 10,
  },
  gotoSell: {
    marginLeft: 140,
    [theme.breakpoints.down("sm")]: {
      margin: "25px auto 0 auto",
    },
  },
}));

export default function Home(props) {
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
      title: "Garidakho|HOME",
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
    <div>
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
      <div className={classes.root}>
        <div className={classes.searchComp}>
          <SearchCar />
          <CSSTransition in={true} timeout={300}>
            <img
              className={classes.WebSearchImage}
              src={WebSearch}
              alt="web-search"
            />
          </CSSTransition>
        </div>

        <div className={classes.gotoSell}>
          <Typography variant="h6">
            Want sell your Old Car ?{" "}
            <NavLink className={classes.typography} to="/sellcar">
              Click here
            </NavLink>
          </Typography>
        </div>
        <Divider />
        {/* <Slideshow /> //Added new 3d slideshow*/}

        <ThreeDSlideshow />
        <BookAppointment />
        <SellCarInThreeSteps />
        <WhyChooseUs />
      </div>
    </div>
  );
}
