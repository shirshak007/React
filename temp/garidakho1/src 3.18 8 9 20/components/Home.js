import React from "react";
import { makeStyles, Container, Typography, Box } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    background: "grey",

    //backgroundImage: `url(${"/asset/background.jpg"})`,
  },
  typography: {
    margin: theme.spacing(1),
    color: "white",
  },
  radio: {
    padding: theme.spacing(3),
    align: "center",
  },
  search: {
    padding: theme.spacing(4),
  },
  text: {
    margin: theme.spacing(1),
    color: "white",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("newcar");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.paper}>
        <Typography className={classes.typography} component="h1" variant="h5">
          FIND THE RIGHT CAR
        </Typography>
      </div>
      <Box display="flex" justifyContent="center">
        <FormControlLabel
          className={classes.text}
          value="start"
          control={
            <Radio
              className={classes.text}
              checked={selectedValue === "newcar"}
              onChange={handleChange}
              value="newcar"
              name="radio-button-demo"
              inputProps={{ "aria-label": "newcar" }}
            />
          }
          label="NEW"
          labelPlacement="start"
        />
        <FormControlLabel
          className={classes.text}
          value="start"
          control={
            <Radio
              className={classes.text}
              checked={selectedValue === "usedcar"}
              onChange={handleChange}
              value="usedcar"
              name="radio-button-demo"
              inputProps={{ "aria-label": "usedcar" }}
            />
          }
          label="OLD"
          labelPlacement="start"
        />
      </Box>
      <div className={classes.search}>
        <SearchBar placeholder="Search Cars Here" />
        <p className={classes.text} style={{ textAlign: "left" }}>
          eg: Hyundai
          <span style={{ float: "right" }}>
            <a className={classes.text} href="/newcar">
              Not sure? View all cars
            </a>
          </span>
        </p>
      </div>
    </Container>
  );
}
