import React from "react";
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

export default function FAQ(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
