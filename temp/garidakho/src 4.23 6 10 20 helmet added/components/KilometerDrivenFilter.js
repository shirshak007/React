import React, { useEffect } from "react";
import {
  makeStyles,
  Grid,
  Box,
  List,
  ListItem,
  Slider,
} from "@material-ui/core";

import Axios from "axios";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function KilometerDrivenFilter(props) {
  const classes = useStyles();
  const [KilometerDriven, setKilometerDriven] = React.useState([0, 100000]);
  const [shadowKilometerDriven, setShadowKilometerDriven] = React.useState(
    false
  );

  const handleChangeKilometerDriven = (event, newKilometerDrivenValue) => {
    setKilometerDriven(newKilometerDrivenValue);
    setShadowKilometerDriven(!shadowKilometerDriven);
    props.onchangekilometerdriven(newKilometerDrivenValue);
  };
  console.log(KilometerDriven);
  return (
    <div className={classes.root}>
      <List component="div" disablePadding>
        <ListItem className={classes.nested}>
          <Slider
            value={KilometerDriven}
            min={0}
            step={100}
            max={100000}
            onChange={handleChangeKilometerDriven}
            color="secondary"
          />
        </ListItem>
        <ListItem
          style={{
            boxShadow: shadowKilometerDriven ? "" : "0px 5px 5px grey",
          }}
          className={classes.nested}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor="secondary.main"
                style={{ padding: "10px" }}
              >
                {KilometerDriven[0]}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor="secondary.main"
                style={{ padding: "10px" }}
              >
                {KilometerDriven[1]}
              </Box>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
}
