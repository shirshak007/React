import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    backgroundColor: "#eceff1",
    color: theme.palette.text.darkBlue,
    alignItems: "right",
    justifyContent: "flex-end",
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      paddingRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingRight: "0",
    },
  },
  topNavlink: {
    color: theme.palette.text.darkBlue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "inherit",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
}));

export default function TopHeader() {
  const classes = useStyles();

  return (
    <div className={classes.top}>
      <NavLink className={classes.topNavlink} to="/partner">
        <Typography>Become Our Partner</Typography>
      </NavLink>
      <NavLink className={classes.topNavlink} to="/faqs">
        <Typography>FAQs</Typography>
      </NavLink>

      <NavLink className={classes.topNavlink} to="/support">
        <Typography>24x7 Support</Typography>
      </NavLink>
      <a className={classes.topNavlink} href="tel:+919062532279">
        +91 9062532279
      </a>
    </div>
  );
}
