import React from "react";
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

export default function UpdateUser(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      UPDATE USER DETAILS
      <Grid
        style={{ marginTop: "10px" }}
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {UserData.map((user) => (
              <Grid key={user.id} item xs={12} sm={4}>
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
                        label="User ID (DON'T UPDATE)"
                        name="userid"
                        value={user.id}
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
                        defaultValue={user.name}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                      >
                        UPDATE USER
                      </Button>
                    </form>
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
