import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Theme from "./Theme";
import iconData from "../asset/iconData";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    height: "600px",
    background: Theme.palette.background.green,
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
    width: 600,
    height: 400,
  },
  gridListIcon: {
    width: 60,
    height: 40,
  },
  text: {
    fontFamily: "lato",
    fontSize: 18,
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

export default function SearchNewCarBy(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h6">
          FIND NEW CAR BY
        </Typography>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="standard"
        aria-label="full width tabs example"
        style={{
          background: "linear-gradient(45deg, #F0F0F0 20%, #FF8E53 90%)",
          borderRadius: 14,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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
          borderColor: Theme.palette.background.darkBlue,
          backgroundColor: Theme.palette.background.blue,
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GridList className={classes.gridList} cellHeight={48} cols={10}>
            {iconData.map((tile) => (
              <GridListTile
                className={classes.gridListIcon}
                key={tile.img}
                cols={tile.cols || 1}
              >
                <img
                  className={classes.gridListIcon}
                  src={tile.img}
                  alt={tile.title}
                />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
}
