import React from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  useTheme,
  Tab,
  Tabs,
  Container,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

import Theme from "./Theme";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";
import DeleteCar from "./DeleteCar";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridpaper: {
    marginTop: theme.spacing(1),
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
      id={`adminfunc${index}`}
      aria-labelledby={`adminfunc-${index}`}
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
    id: `adminfunc-${index}`,
    "aria-controls": `adminfunc-${index}`,
  };
}
function showtab1(index) {
  return {
    id: `adminfunc-${index}`,
    "aria-controls": `adminfunc-${index}`,
  };
}
function showtab2(index) {
  return {
    id: `adminfunc-${index}`,
    "aria-controls": `adminfunc-${index}`,
  };
}

export default function AdminFunctionality(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          ADMIN FUNCTIONALITY
        </Typography>
      </div>
      <Typography style={{ color: "green" }}>MANAGE</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="on"
        aria-label="tabs"
        style={{
          background: "linear-gradient( to right, white, #c4f2ff)",
          borderRadius: 8,
          boxShadow: "0 3px 5px 2px rgba(0, 105, 135, .3)",
          color: "black",
          marginBottom: "20px",
        }}
      >
        <Tab label="USER" {...showtab(0)} />
        <Tab label="CAR" {...showtab(1)} />
      </Tabs>
      <Box
        border={1}
        borderRadius={16}
        style={{
          borderColor: "#004346",
          width: "100%",
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tabs
            value={value1}
            onChange={handleChange1}
            variant="scrollable"
            scrollButtons="on"
            aria-label="tabs"
            style={{
              background: "linear-gradient( to left, white, #c4f2ff)",
              borderRadius: 8,
              boxShadow: "0 3px 5px 2px rgba(0, 105, 135, .3)",
              color: "black",
            }}
          >
            <Tab label="Add" {...showtab1(0)} />
            <Tab label="Update" {...showtab1(1)} />
            <Tab label="Delete" {...showtab1(2)} />
          </Tabs>

          <Paper className={classes.gridpaper}>
            <TabPanel value={value1} index={0} dir={theme.direction}>
              <AddUser />
            </TabPanel>
            <TabPanel value={value1} index={1} dir={theme.direction}>
              <UpdateUser />
            </TabPanel>
            <TabPanel value={value1} index={2} dir={theme.direction}>
              <DeleteUser />
            </TabPanel>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tabs
            value={value2}
            onChange={handleChange2}
            variant="scrollable"
            scrollButtons="on"
            aria-label="tabs"
            style={{
              background: "linear-gradient( to left, white, #c4f2ff)",
              borderRadius: 8,
              boxShadow: "0 3px 5px 2px rgba(0, 105, 135, .3)",
              color: "black",
            }}
          >
            <Tab label="Add" {...showtab2(0)} />
            <Tab label="Update" {...showtab2(1)} />
            <Tab label="Delete" {...showtab2(2)} />
          </Tabs>

          <Paper className={classes.gridpaper}>
            <TabPanel value={value2} index={0} dir={theme.direction}>
              <AddCar />
            </TabPanel>
            <TabPanel value={value2} index={1} dir={theme.direction}>
              <UpdateCar />
            </TabPanel>
            <TabPanel value={value2} index={2} dir={theme.direction}>
              <DeleteCar />
            </TabPanel>
          </Paper>
        </TabPanel>
      </Box>
    </Container>
  );
}
