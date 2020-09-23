import React from "react";
import { makeStyles, Grid, Paper, TextField, Button } from "@material-ui/core";
import { OldCar as CarData } from "../asset/CarData";
//const editJsonFile = require("edit-json-file");
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

export default function UpdateCar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      UPDATE USED CAR DETAILS
      <Grid
        style={{ marginTop: "10px" }}
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {CarData.map((car) => (
              <Grid key={car.id} item xs={12} sm={4}>
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
                        label="car ID (DON'T UPDATE)"
                        name="carid"
                        value={car.id}
                        disabled
                      />
                      <TextField
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        required
                        fullWidth
                        name="carname"
                        label="car Name"
                        id="carname"
                        defaultValue={car.name}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                      >
                        UPDATE CAR
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
