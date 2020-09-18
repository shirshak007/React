import React from "react";

import { Grid, Paper, Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

import EventIcon from "@material-ui/icons/Event";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Projects from "./Projects";
import Illustration from "./Illustration";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  navlink: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

export default function Deshboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          DASHBOARD
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Paper
              className={classes.paper}
              style={{ borderLeft: "6px solid green" }}
            >
              <Grid container>
                <Grid item xs>
                  EARNINGS (MONTHLY)
                  <Typography variant="h6">₹40,000</Typography>
                </Grid>
                <Grid item>
                  <CalendarTodayIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={classes.paper}
              style={{ borderLeft: "6px solid cyan" }}
            >
              <Grid container>
                <Grid item xs>
                  EARNINGS (ANNUAL)
                  <Typography variant="h6">₹440,000</Typography>
                </Grid>
                <Grid item>
                  <EventIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={classes.paper}
              style={{ borderLeft: "6px solid violet" }}
            >
              <Grid container>
                <Grid item xs>
                  TASKS
                  <br />
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <LinearProgress variant="determinate" value={50} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        50%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <FormatListBulletedIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={classes.paper}
              style={{ borderLeft: "6px solid lightblue" }}
            >
              <Grid container>
                <Grid item xs>
                  PENDING REQUESTS
                  <Typography variant="h6">18</Typography>
                </Grid>
                <Grid item>
                  <AssignmentLateIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{ marginTop: "15px", marginLeft: "15px" }}
        >
          <Grid item xs={12}>
            <LineChart />
          </Grid>
          <Grid item xs={12}>
            <PieChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Projects />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Illustration />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
