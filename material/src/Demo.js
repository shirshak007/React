import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Theme from "./Theme";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: Theme.spacing(2),
    textAlign: "center",
    color: Theme.palette.text.light,
  },
  box: {
    padding: Theme.spacing(2),
    textAlign: "center",
    borderColor: Theme.palette.text.dark,
    color: Theme.palette.text.dark,
    backgroundColor: Theme.palette.background.blue,
    p: 2,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper borderTop={1} className={classes.paper}>
            xs=12
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box} border={1}>
            background Color , 4side border, text color
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            height="100%"
            bgcolor={Theme.palette.background.green}
            textAlign="center"
            color={Theme.palette.background.darkBlue}
            p={2}
            borderTop={1}
          >
            background Color , upside border(change borderTop), text color
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box
            height="100%"
            bgcolor={red[100]}
            textAlign="center"
            color={Theme.palette.background.darkBlue}
            p={2}
            borderBottom={1}
          >
            background Color , text color
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
