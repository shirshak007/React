import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
  Dialog,
  Slide,
} from "@material-ui/core";
import { useCookies } from "react-cookie";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BuildIcon from "@material-ui/icons/Build";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import PieChartIcon from "@material-ui/icons/PieChart";
import MailIcon from "@material-ui/icons/Mail";
import PagesIcon from "@material-ui/icons/Pages";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import TableChartIcon from "@material-ui/icons/TableChart";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Theme from "./Theme";
import Dashboard from "./Dashboard";
import AdminFunctionality from "./AdminFunctionality";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const drawerWidth = 220;
const smalldrawerWidth = 60;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: -smalldrawerWidth,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: `calc(100% - ${smalldrawerWidth}px)`,
      marginLeft: smalldrawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginRight: "1px",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      width: smalldrawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: Theme.palette.background.green,
    [theme.breakpoints.down("xs")]: {
      width: smalldrawerWidth,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.down("xs")]: {
      marginLeft: -smalldrawerWidth,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

export default function AdminHome() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen = () => {
    setOpen4(true);
  };
  const handleClickOpen1 = () => {
    setOpen5(true);
  };
  const handleClickOpen2 = () => {
    setOpen6(true);
  };
  const handleClose = () => {
    setOpen4(false);
  };
  const handleClose1 = () => {
    setOpen5(false);
  };

  const handleClose2 = () => {
    setOpen6(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const [cookies, setCookie] = useCookies(["name"]);

  const logout = () => {
    setCookie("name", "", { path: "/" });
  };
  if (cookies.name) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar
            style={{ backgroundColor: Theme.palette.background.darkBlue }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              style={{
                flexGrow: 1,

                color: "white",
                textDecoration: "inherit",
                fontSize: "20px",
              }}
              to="/"
            >
              GARI DAKHO
            </NavLink>
            Welcome {cookies.name}!{" "}
            {/*This cookie is set after successful login*/}
            <NavLink
              style={{
                paddingLeft: "5px",
                color: "white",
                textDecoration: "inherit",
              }}
              to="/adminlogin"
              onClick={logout}
            >
              LOGOUT
            </NavLink>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Tooltip title="Dashboard">
              <ListItem button key="dashboard">
                <ListItemIcon>
                  <DashboardRoundedIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Tooltip>
          </List>
          <Divider />
          <List>
            <Tooltip title="Functionality">
              <ListItem button key="Functionality" onClick={handleClickOpen}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Admin Functionality" />
              </ListItem>
            </Tooltip>
          </List>
          <Dialog
            fullScreen
            open={open4}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar style={{ background: "transparent", boxShadow: "none" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <AdminFunctionality />
          </Dialog>
          <Divider />
          <List>
            <Tooltip title="Stats">
              <ListItem button onClick={handleClick1}>
                <ListItemIcon>
                  <BarChartRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Stats" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Tooltip>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Earning">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen1}
                  >
                    <ListItemIcon>
                      <TrendingUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Earning" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open5}
                  onClose={handleClose1}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose1}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <LineChart />
                </Dialog>
                <Tooltip title="Revenue">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen2}
                  >
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Revenue" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open6}
                  onClose={handleClose2}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose2}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <PieChart />
                </Dialog>
              </List>
            </Collapse>
            <Tooltip title="SEO">
              <ListItem button onClick={handleClick2}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="SEO" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Tooltip>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Tips">
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tips" />
                  </ListItem>
                </Tooltip>
                <Tooltip title="Manage SEO">
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage SEO" />
                  </ListItem>
                </Tooltip>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <Tooltip title="Pages">
              <ListItem button onClick={handleClick3}>
                <ListItemIcon>
                  <PagesIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Tooltip>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Color">
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Color" />
                  </ListItem>
                </Tooltip>
                <Tooltip title="Animator">
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PagesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Animator" />
                  </ListItem>
                </Tooltip>
              </List>
            </Collapse>
          </List>

          <List>
            <Tooltip title="Charts">
              <ListItem button key="charts">
                <ListItemIcon>
                  <InsertChartIcon />
                </ListItemIcon>
                <ListItemText primary="Charts" />
              </ListItem>
            </Tooltip>
          </List>

          <List>
            <Tooltip title="Tables">
              <ListItem button key="tables">
                <ListItemIcon>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Tables" />
              </ListItem>
            </Tooltip>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Dashboard />
        </main>
      </div>
    );
  } else {
    return <div>{history.push("/adminlogin")}</div>;
  }
}
