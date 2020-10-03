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
  Fab,
} from "@material-ui/core";
import { useCookies } from "react-cookie";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BuildIcon from "@material-ui/icons/Build";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import PieChartIcon from "@material-ui/icons/PieChart";
import MailIcon from "@material-ui/icons/Mail";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Theme from "./Theme";
import Dashboard from "./Dashboard";
import AdminFunctionality from "./AdminFunctionality";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import AddNewBlog from "./AddNewBlog";

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
  icon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  fab: {
    position: "fixed",
    zIndex: 2,
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    color: "white",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  },
}));

export default function AdminHome() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);

  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);

  const [OpenNewBlog, setOpenNewBlog] = React.useState(false);
  const handleClickOpen = () => {
    setOpen4(true);
  };
  const handleClickOpen1 = () => {
    setOpen5(true);
  };
  const handleClickOpenRevenue = () => {
    setOpen6(true);
  };
  const handleClickOpenReportingGroupProperties = () => {
    setOpen7(true);
  };
  const handleClickOpen4 = () => {
    setOpen8(true);
  };
  const handleClickOpen5 = () => {
    setOpen9(true);
  };
  const handleClickOpen6 = () => {
    setOpen10(true);
  };
  const handleClickOpen7 = () => {
    setOpen11(true);
  };
  const handleClickOpenNewBlog = () => {
    setOpenNewBlog(true);
  };
  const handleClose = () => {
    setOpen4(false);
  };
  const handleCloseEarning = () => {
    setOpen5(false);
  };

  const handleCloseRevenue = () => {
    setOpen6(false);
  };
  const handleCloseReportingGroupProperties = () => {
    setOpen7(false);
  };
  const handleClose4 = () => {
    setOpen8(false);
  };
  const handleClose5 = () => {
    setOpen9(false);
  };
  const handleClose6 = () => {
    setOpen10(false);
  };
  const handleClose7 = () => {
    setOpen11(false);
  };
  const handleCloseNewBlog = () => {
    setOpenNewBlog(false);
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
  const handleClickSeo = () => {
    setOpen2(!open2);
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
            <Dialog
              fullScreen
              open={OpenNewBlog}
              onClose={handleCloseNewBlog}
              TransitionComponent={Transition}
            >
              <AppBar style={{ background: "transparent", boxShadow: "none" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    onClick={handleCloseNewBlog}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <AddNewBlog />
            </Dialog>
          </div>
          <Divider />
          <List>
            <Tooltip title="Dashboard">
              <ListItem button key="dashboard">
                <ListItemIcon>
                  <DashboardRoundedIcon />
                </ListItemIcon>
                Dashboard
              </ListItem>
            </Tooltip>
          </List>
          <Divider
            style={{
              boxShadow: "2px 5px 5px grey",
            }}
          />
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
          <Divider
            style={{
              boxShadow: "2px 5px 5px grey",
            }}
          />
          <List>
            <Tooltip title="Stats">
              <ListItem button onClick={handleClick1}>
                <ListItemIcon>
                  <BarChartRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Stats" />
                {open1 ? (
                  <ExpandLess className={classes.icon} />
                ) : (
                  <ExpandMore className={classes.icon} />
                )}
              </ListItem>
            </Tooltip>
            <Divider
              style={{
                boxShadow: "2px 5px 5px grey",
              }}
            />
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
                  onClose={handleCloseEarning}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseEarning}
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
                    onClick={handleClickOpenRevenue}
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
                  onClose={handleCloseRevenue}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseRevenue}
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
              <ListItem button onClick={handleClickSeo}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="SEO" />
                {open2 ? (
                  <ExpandLess className={classes.icon} />
                ) : (
                  <ExpandMore className={classes.icon} />
                )}
              </ListItem>
            </Tooltip>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Reporting Group Properties">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpenReportingGroupProperties}
                  >
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reporting Group Properties" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open7}
                  onClose={handleCloseReportingGroupProperties}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseReportingGroupProperties}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    Reporting Group Properties – Opens the Add/Edit SEO
                    Reporting Groups dialog which allows you to edit the various
                    properties of the reporting group, including:
                    Name/Description Rank Tracking Properties Keyword
                    Suggestions & Link Tracking Properties SEO Rules Warning
                    Properties
                  </div>
                </Dialog>
                <Tooltip title="Search Engines">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen4}
                  >
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search Engines" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open8}
                  onClose={handleClose4}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose4}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    Search Engines – Opens the Reporting Groups Search Engines
                    dialog, which allows you to add, edit and remove the search
                    engine API accounts for retrieving SERP results.
                  </div>
                </Dialog>
                <Tooltip title="Competitors">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen5}
                  >
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Competitors" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open9}
                  onClose={handleClose5}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose5}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    Competitors – Opens the SEO Competitors dialog, which allows
                    you to add, edit, and delete competitors to track results
                    for.
                  </div>
                </Dialog>
                <Tooltip title="Page Grading Rules">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen6}
                  >
                    <ListItemIcon>
                      <PieChartIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Page Grading Rules" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open10}
                  onClose={handleClose6}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose6}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    Page Grading Rules – Opens the SEO Page Grading Rules
                    dialog, which allows you to specify SEO rules for the
                    Reporting Group, an optional weight value for each rule, and
                    rule properties.
                  </div>
                </Dialog>
                <Tooltip title="Security">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpen7}
                  >
                    <ListItemIcon>
                      <PieChartIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={open11}
                  onClose={handleClose7}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleClose7}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    Security – Opens the SEO Reporting Group Security dialog,
                    allowing you to set permissions for the current SEO
                    Reporting Group.
                  </div>
                </Dialog>
              </List>
            </Collapse>
          </List>
          <Divider
            style={{
              boxShadow: "2px 5px 5px grey",
            }}
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Fab
            className={classes.fab}
            variant="extended"
            onClick={handleClickOpenNewBlog}
          >
            <AddIcon />
            New Blog
          </Fab>
          <Dashboard />
        </main>
      </div>
    );
  } else {
    return <div>{history.push("/adminlogin")}</div>;
  }
}
