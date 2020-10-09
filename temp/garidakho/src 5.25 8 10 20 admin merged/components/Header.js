//sticky header nav bar
import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import TitleIcon from "../asset/svg/Free_Sample_By_Wix.jpg";
import Theme from "./Theme";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    // backgroundColor: Theme.palette.background.darkBlue,
    borderRadius: theme.shape.borderRadius,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    backgroundColor: "white",
    position: "static",
    padding: theme.spacing(0, 1),
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  navRight: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
  },

  space: {
    //To deal with the row break while shrinking
    color: Theme.palette.background.darkBlue,
  },
  text: {
    color: "#0060a1",
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 9,
    // },
  },
  textspace: {
    //To deal with the row break while shrinking
    fontSize: 7,
  },

  container: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
  },
  titlelink: {
    color: "white",
    display: "flex",
    flexDirection: "row",

    textDecoration: "inherit",
    textAlign: "left",
    padding: theme.spacing(1),
    fontFamily: "lato",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0.5),
    },
  },
  navlink: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textDecoration: "inherit",
    padding: theme.spacing(1),
    fontFamily: "lato",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0.5),
    },
  },

  imagebox: {
    width: "200px",
    height:
      "auto" /*change the height always 30-40 pixel less than gridpaper. It contains the title of image*/,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

export default function HeaderTab() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <NavLink
            className={classes.titlelink}
            to="/"
            activeClassName="selected"
          >
            <div className={classes.imagebox}>
              <img
                className={classes.image}
                src={TitleIcon}
                height="50px"
                width="50px"
                alt="title"
              />
            </div>
          </NavLink>
        </div>
        <div className={classes.navRight}>
          <NavLink className={classes.navlink} to="/newcar">
            <Typography className={classes.text}>NEW</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/usedcar">
            <Typography className={classes.text}>USED</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/sellcar">
            <Typography className={classes.text}>SELL</Typography>
            <Typography className={classes.textspace}>_</Typography>
            <Typography className={classes.text}>CAR</Typography>
          </NavLink>
          <NavLink className={classes.navlink} to="/login">
            <Typography className={classes.text}>
              <PowerSettingsNewIcon />
            </Typography>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
