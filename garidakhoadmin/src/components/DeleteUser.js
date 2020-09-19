import React from "react";
import { makeStyles, Grid, Paper, Button } from "@material-ui/core";
import { UserData as data } from "../asset/UserData";
import { NavLink } from "react-router-dom";
const editJsonFile = require("edit-json-file");

let file = editJsonFile(`../asset/UserData1.js`);
//let file = editJsonFile(`../asset/UserData.js`);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  imagebox: {
    width: "100%",

    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {data.map((user) => (
              <Grid key={user.id} item xs={4}>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    {user.id} {user.name}
                    <Button id={user.id}>Delete</Button>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
