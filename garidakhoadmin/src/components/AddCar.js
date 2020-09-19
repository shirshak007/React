import React, { useState } from "react";
import { makeStyles, Grid, Paper, TextField, Button } from "@material-ui/core";
import CarData from "../asset/CarData";
//let file = editJsonFile(`../asset/CarData1.js`);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  carform: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function AddCar(props) {
  const classes = useStyles();
  const [carname, setcarname] = useState("");

  return (
    <div className={classes.root}>
      ADD NEW CAR
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.gridpaper}>
            <div className={classes.carform}>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  id="carid"
                  label="Car ID(Auto Generated)"
                  name="carid"
                  defaultValue={CarData.length + 1}
                  //this should be generated automatically if we use database
                  disabled
                />
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="carname"
                  label="Car Name"
                  id="carname"
                  value={carname}
                  onChange={(e) => setcarname(e.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  ADD CAR
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
