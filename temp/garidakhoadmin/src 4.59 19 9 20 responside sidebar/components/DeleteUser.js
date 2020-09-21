import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Button,
  Typography,
  TextField,
  useTheme,
  fade,
} from "@material-ui/core";
import UserData from "../asset/UserData";
import Autocomplete from "@material-ui/lab/Autocomplete";

//const editJsonFile = require("edit-json-file");

//let file = editJsonFile(`../asset/UserData1.js`);
//let file = editJsonFile(`../asset/UserData.js`);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  imagebox: {
    width: "100%",
    margin: "5px",
    flexDirection: "row",
    alignItems: "center",
    height: "150px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gridpaper: {
    margin: "10px",
  },
}));

export default function DeleteUser(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      DELETE USER
      <Autocomplete
        id="Search User"
        style={{
          width: "100%",
          background: fade(theme.palette.common.white, 0.5),
        }}
        options={UserData}
        getOptionLabel={(option) => option.id + ". " + option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search User"
            variant="outlined"
            color="secondary"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
        )}
      />
      OR,
      <Grid
        style={{ marginTop: "10px" }}
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {UserData.map((user) => (
              <Grid key={user.id} item xs={6} sm={4}>
                <Paper className={classes.gridpaper}>
                  <div className={classes.imagebox}>
                    <Grid container justify="center" spacing={2}>
                      <Grid item xs={12}>
                        <Typography>ID: {user.id}</Typography>
                        <Typography>Name: {user.name}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          style={{
                            backgroundColor: "#ff6969",
                          }}
                          id={user.id}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
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
