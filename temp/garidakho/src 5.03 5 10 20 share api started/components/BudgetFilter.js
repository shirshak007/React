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

export default function BudgetFilter(props) {
  const classes = useStyles();
  const [Budget, setBudget] = React.useState([15000, 1000000]);

  const [shadowBudget, setShadowBudget] = React.useState(false);

  const handleChangeBudget = (event, newBudgetValue) => {
    setBudget(newBudgetValue);
    setShadowBudget(!shadowBudget);
    props.onchangebudget(newBudgetValue);
  };

  return (
    <div className={classes.root}>
      <List component="div" disablePadding>
        <ListItem className={classes.nested}>
          <Slider
            value={Budget}
            min={15000}
            step={10000}
            max={1000000}
            onChange={handleChangeBudget}
            color="secondary"
          />
        </ListItem>
        <ListItem
          style={{
            boxShadow: shadowBudget ? "" : "0px 5px 5px grey",
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
                {Budget[0]}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor="secondary.main"
                style={{ padding: "10px" }}
              >
                {Budget[1]}
              </Box>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
}
