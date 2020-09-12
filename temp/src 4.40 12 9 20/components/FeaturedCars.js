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
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  grid: {
    flexGrow: 1,
  },
  gridpaper: {
    /*Change the height and width here to reflect changes */
    height: 240,
    width: 265,
  },
  control: {
    padding: theme.spacing(2),
  },
  imagebox: {
    width: "100%",
    height: 200 /*change the height always 30-40 pixex less than gridpaper. It contains the title of image*/,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
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
export default function FeaturedCars(props) {
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
          FEATURED CARS
        </Typography>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        centered
        style={{
          background: "#99dfff",
          borderRadius: 14,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "black",
          indicatorColor: "primary",
        }}
      >
        <Tab label="Popular" {...showtab(0)} />
        <Tab label="Just Launched" {...showtab(1)} />
        <Tab label="Upcoming Cars" {...showtab(2)} />
      </Tabs>
      <Container>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {iconDataBrand.map((tile) => (
                  <Grid key={tile.img} item>
                    <Paper className={classes.gridpaper}>
                      <div className={classes.imagebox}>
                        <NavLink className={classes.link} to="/">
                          {" "}
                          {/*Change the to="/" according to need*/}
                          <img
                            className={classes.image}
                            src={tile.img}
                            alt={tile.title}
                          />
                          <Typography align="center">{tile.title}</Typography>
                        </NavLink>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
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
                        <Typography align="center">{tile.title}</Typography>
                      </NavLink>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
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
                        <Typography align="center">{tile.title}</Typography>
                      </NavLink>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </Container>
  );
}
