import React, { useState } from "react";
import { makeStyles, Grid, Paper, TextField, Button } from "@material-ui/core";
import UserData from "../asset/UserData";
//const editJsonFile = require("edit-json-file");
//let file = editJsonFile(`../asset/UserData1.js`);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  userform: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));
export default function AddUser(props) {
  const classes = useStyles();
  const [username, setusername] = useState("");

  return (
    <div className={classes.root}>
      ADD NEW USER
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.gridpaper}>
            <div className={classes.userform}>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  id="userid"
                  label="User ID(Auto Generated)"
                  name="userid"
                  defaultValue={UserData.length + 1} //this should be generated automatically if we use database
                  disabled
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="username"
                  label="User Name"
                  id="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  ADD USER
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
