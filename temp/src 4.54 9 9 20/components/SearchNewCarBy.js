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
    height: "400px",
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },
  gridList: {
    marginBottom: theme.spacing(2),
  },
  gridListIcon: {
    width: 54,
    height: 54,
    [theme.breakpoints.down("xs")]: {
      width: 24,
      height: 24,
    },
  },
  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  imagebox: {
    height: 52,
    width: 52,
  },
  image: {
    height: 48,
    width: 48,
    [theme.breakpoints.down("xs")]: {
      width: 24,
      height: 24,
    },
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
          FIND NEW CAR BY
        </Typography>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        aria-label="tabs"
        style={{
          background: "linear-gradient(45deg, #01579b 20%, #33691e 90%)",
          borderRadius: 14,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
        }}
      >
        <Tab label="Brand" {...showtab(0)} />

        <Tab label="Budget" {...showtab(1)} />
        <Tab label="Fuel" {...showtab(2)} />
      </Tabs>
      <Box
        border={3}
        borderRadius={16}
        style={{
          borderColor: "#004346",
          backgroundColor: "#b8ffef",
          width: "75%",
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GridList
            className={classes.gridList}
            cellHeight={48}
            cols={8}
            spacing={4}
          >
            {iconDataBrand.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <img
                  className={classes.image}
                  src={tile.img}
                  alt={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GridList
            className={classes.gridList}
            cellHeight={48}
            cols={8}
            spacing={4}
          >
            {iconDataBudgetCar.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <img
                  className={classes.gridListIcon}
                  src={tile.img}
                  alt={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <GridList
            className={classes.gridList}
            cellHeight={48}
            cols={8}
            spacing={4}
          >
            {iconDataBrand.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <img
                  className={classes.gridListIcon}
                  src={tile.img}
                  alt={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
      </Box>
    </Container>
  );
}
