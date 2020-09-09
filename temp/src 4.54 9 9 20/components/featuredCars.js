import React from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  useTheme,
  Tab,
  Tabs,
  Container,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  Box,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
    },
  },

  imagebox: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
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
export default function SearchBrandBy(props) {
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
          <GridList cols={3}>
            {iconDataBudgetCar.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <div className={classes.imagebox}>
                  <img
                    className={classes.image}
                    src={tile.img}
                    alt={tile.title}
                  />
                  <GridListTileBar
                    className={classes.text}
                    title={tile.title}
                  />
                </div>
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GridList cols={3}>
            {iconDataBrand.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <div className={classes.imagebox}>
                  <img
                    className={classes.image}
                    src={tile.img}
                    alt={tile.title}
                  />
                </div>
                <GridListTileBar className={classes.text} title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <GridList cols={3}>
            {iconDataBrand.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <div className={classes.imagebox}>
                  <img
                    className={classes.image}
                    src={tile.img}
                    alt={tile.title}
                  />
                </div>
                <GridListTileBar className={classes.text} title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
      </Container>
    </Container>
  );
}
