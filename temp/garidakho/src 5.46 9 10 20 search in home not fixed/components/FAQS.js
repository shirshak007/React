//two faq file to deal will the child helmet title problem, this is the full page faq with own helmet
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import { makeStyles, Typography, Divider } from "@material-ui/core";
//import axios from "axios"; //if needed
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../asset/ribbon.css";

/*CUSTOM STYLE*/
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),

    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    boxShadow: "2px 5px 5px grey",
  },

  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FAQS(props) {
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
      title: "Garidakho|FAQ",
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
      <Divider />
      <Typography variant="h5" style={{ margin: "10px 20px 20px 0px" }}>
        FREQUENTLY ASKED QUESTIONS
      </Typography>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are the latest cars?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              kwid, sonet, thar, vantage, db11 are the latest cars available in
              India which include. Hatchback, Sedan & Suv cars.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are the upcoming cars in India?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              gloster, tuv 300, hexa, magnite, gravitas are the upcoming cars in
              India which will be launched in India in 2020-2022.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are the best cars for a small family?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              kwid, swift, altroz, baleno, elite i20 are the best cars for the
              small family with price starts at Rs 3.07 Lakh In India.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Which cars are the best to buy in 2020?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              altroz, sonet, thar, seltos, creta & many more are the popular
              cars in India. The price starts at Rs 5.44 Lakh.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are the popular car companies in India?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are 37 car manufacturers In India. Maruti, Hyundai, Honda,
              Tata, Mahindra & more are the popular car manufacturers in India.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
