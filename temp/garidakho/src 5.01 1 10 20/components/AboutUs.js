import React from "react";
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

  return (
    <div className={classes.container}>
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
