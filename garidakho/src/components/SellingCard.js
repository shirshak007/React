import React from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
  CardContent,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Theme from "./Theme";
import sellingCarData from "../asset/sellingCarData";
import "../asset/ribbon.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  sidebar: {
    borderRight: `3px solid ${theme.palette.divider}`,
    height: "auto",
    paddingTop: theme.spacing(5),

    [theme.breakpoints.down("xs")]: {
      width: 120,
      padding: theme.spacing(1),
    },
  },
  sidebarbutton: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
    width: 220,
    height: 40,
    display: "flex",
    flexGrow: "row",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "lato",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5),
      paddingBottom: theme.spacing(1),
      width: 120,
      height: 30,
      fontSize: 10,
    },
  },
  content: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkGreen,
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
  },
  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  ribbontext: {
    fontFamily: "lato",
    fontSize: 12,
  },
  navlink: {
    color: "white",
    textDecoration: "inherit",
    width: "100%",
  },
  grid: {
    flexGrow: 1,
  },

  link: {
    color: "black",
    textDecoration: "inherit",
  },
  card: {
    width: 380,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  media: {
    width: "100%",
    height: 240,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  imagebox: {
    width: "100%",
    height: "100%",
    /*change the height always 30-40 pixex less than gridpaper. It contains the title of image*/
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
}));

export default function SellingCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorE1, setAnchorE1] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const [anchorE5, setAnchorE5] = React.useState(null);
  const [anchorE6, setAnchorE6] = React.useState(null);
  const [anchorE7, setAnchorE7] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget);
  };
  const handleClick5 = (event) => {
    setAnchorE6(event.currentTarget);
  };
  const handleClick6 = (event) => {
    setAnchorE6(event.currentTarget);
  };
  const handleClick7 = (event) => {
    setAnchorE7(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorE1(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };
  const handleClose4 = () => {
    setAnchorE4(null);
  };
  const handleClose5 = () => {
    setAnchorE5(null);
  };
  const handleClose6 = () => {
    setAnchorE6(null);
  };
  const handleClose7 = () => {
    setAnchorE7(null);
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.sidebar}
        orientation="vertical"
        variant="scrollable"
        aria-label="Sidebar"
      >
        <div className={classes.sidebarbutton} onClick={handleClick1}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Kilometers Driven
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE1}
          keepMounted
          open={Boolean(anchorE1)}
          onClose={handleClose1}
        >
          <MenuItem onClick={handleClose1}>Test11</MenuItem>
          <MenuItem onClick={handleClose1}>Test12</MenuItem>
          <MenuItem onClick={handleClose1}>Test13</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick2}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Model Year
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE2}
          keepMounted
          open={Boolean(anchorE2)}
          onClose={handleClose2}
        >
          <MenuItem onClick={handleClose2}>Test21</MenuItem>
          <MenuItem onClick={handleClose2}>Test22</MenuItem>
          <MenuItem onClick={handleClose2}>Test23</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick3}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Fuel Type
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE3}
          keepMounted
          open={Boolean(anchorE3)}
          onClose={handleClose3}
        >
          <MenuItem onClick={handleClose3}>test31</MenuItem>
          <MenuItem onClick={handleClose3}>test32</MenuItem>
          <MenuItem onClick={handleClose3}>test33</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick4}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Transmission Type
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE4}
          keepMounted
          open={Boolean(anchorE4)}
          onClose={handleClose4}
        >
          <MenuItem onClick={handleClose4}>Test41</MenuItem>
          <MenuItem onClick={handleClose4}>Test42</MenuItem>
          <MenuItem onClick={handleClose4}>Test43</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick5}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Body Type
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE5}
          keepMounted
          open={Boolean(anchorE5)}
          onClose={handleClose5}
        >
          <MenuItem onClick={handleClose5}>Test51</MenuItem>
          <MenuItem onClick={handleClose5}>Test52</MenuItem>
          <MenuItem onClick={handleClose5}>Test53</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick6}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Number of Owners
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE6}
          keepMounted
          open={Boolean(anchorE6)}
          onClose={handleClose6}
        >
          <MenuItem onClick={handleClose6}>Test61</MenuItem>
          <MenuItem onClick={handleClose6}>Test62</MenuItem>
          <MenuItem onClick={handleClose6}>Test63</MenuItem>
        </Menu>
        <div className={classes.sidebarbutton} onClick={handleClick7}>
          <div
            style={{
              paddingTop: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            By Registration City
            <IconButton color="secondary">
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorE7}
          keepMounted
          open={Boolean(anchorE7)}
          onClose={handleClose7}
        >
          <MenuItem onClick={handleClose7}>Test71</MenuItem>
          <MenuItem onClick={handleClose7}>Test72</MenuItem>
          <MenuItem onClick={handleClose7}>Test73</MenuItem>
        </Menu>
      </div>
      <Container className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.typography} variant="h6">
            CHECK OUT OUR CARS
          </Typography>
        </div>

        <Grid container justify="center" spacing={5}>
          {sellingCarData.map((car) => (
            <Grid key={car.img} item>
              <NavLink to="/" className={classes.navlink}>
                <Card className={classes.card}>
                  <Paper className={classes.media}>
                    <div className={classes.imagebox}>
                      <img
                        className={classes.image}
                        src={car.img}
                        alt={car.title}
                      />
                      <div className="ribbon ribbon-top-left">
                        <span>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CheckCircleIcon className={classes.ribbontext} />
                            <Typography className={classes.ribbontext}>
                              MONEYBACK
                            </Typography>
                          </div>
                        </span>
                      </div>
                    </div>
                  </Paper>

                  <CardContent>
                    <Typography
                      className={classes.cardtypography}
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      {car.title}
                      {bull} ₹{car.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {car.distance}
                      {bull}
                      {car.fuel}
                      {bull}
                      {car.owner}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
