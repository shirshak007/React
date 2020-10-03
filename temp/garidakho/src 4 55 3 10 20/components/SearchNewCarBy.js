import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Tab,
  Tabs,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from "@material-ui/core";

import Theme from "./Theme";
import iconDataBrand from "../asset/iconDataBrand";
import iconDataBudgetCar from "../asset/iconDataBudgetCar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),

    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    borderColor: "#004346",
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  imagebox: {
    width: 50,
    height: 50,
    [theme.breakpoints.down("xs")]: {
      width: 25,
      height: 25,
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`searchcarby${index}`}
      aria-labelledby={`searchcarby-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div className={classes.text}>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function showtab(index) {
  return {
    id: `searchcarby-${index}`,
    "aria-controls": `searchcarby-${index}`,
  };
}

/*CUSTOM STYLE*/

export default function SearchNewCar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h6">
          FIND NEW CAR BY
        </Typography>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        aria-label="tabs"
        style={{
          background: "linear-gradient(to right, #01579b , #33691e )",
          borderRadius: 14,
          boxShadow: "0 3px 5px 2px rgba(0, 105, 135, .3)",
          color: "white",
        }}
      >
        <Tab aria-label="tab1" label="Brand" {...showtab(0)} />
        <Tab aria-label="tab2" label="Budget" {...showtab(1)} />
        <Tab aria-label="tab3" label="Fuel" {...showtab(2)} />
      </Tabs>
      <Box border={1} borderRadius={16} className={classes.box}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {iconDataBrand.map((tile) => (
                <Grid key={tile.img} item>
                  <Paper className={classes.gridpaper}>
                    <div className={classes.imagebox}>
                      <NavLink className={classes.link} to="/">
                        <img
                          className={classes.image}
                          src={tile.img}
                          alt={tile.title}
                        />
                      </NavLink>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {iconDataBudgetCar.map((tile) => (
                  <Grid key={tile.img} item>
                    <Paper className={classes.gridpaper}>
                      <div className={classes.imagebox}>
                        <NavLink className={classes.link} to="/">
                          <img
                            className={classes.image}
                            src={tile.img}
                            alt={tile.title}
                          />
                        </NavLink>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {iconDataBrand.map((tile) => (
                  <Grid key={tile.img} item>
                    <Paper className={classes.gridpaper}>
                      <div className={classes.imagebox}>
                        <NavLink className={classes.link} to="/">
                          <img
                            className={classes.image}
                            src={tile.img}
                            alt={tile.title}
                          />
                        </NavLink>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Container>
  );
}
