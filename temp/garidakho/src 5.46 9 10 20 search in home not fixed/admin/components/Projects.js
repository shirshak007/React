import React from "react";

import { Grid, Paper, Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
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
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          PROJECTS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ borderLeft: "6px solid green" }}
            >
              <Grid container>
                <Grid item xs>
                  Server Migration
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <BorderLinearProgress variant="determinate" value={20} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        20%
                      </Typography>
                    </Box>
                  </Box>
                  Sales Tracking
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <BorderLinearProgress variant="determinate" value={40} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        40%
                      </Typography>
                    </Box>
                  </Box>
                  Customer Database
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        50%
                      </Typography>
                    </Box>
                  </Box>
                  Payout Details
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <BorderLinearProgress variant="determinate" value={60} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        60%
                      </Typography>
                    </Box>
                  </Box>
                  Account Setup
                  <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                      <BorderLinearProgress
                        color="primary"
                        variant="determinate"
                        value={80}
                      />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="h6" color="textSecondary">
                        80%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "green" }}
            >
              PAPER1
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "cyan" }}
            >
              PAPER2
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "yellow" }}
            >
              PAPER3
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "gray" }}
            >
              PAPER4
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
