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
import SEOPagesEdit from "./SEOPagesEditCustom";

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


  //to open and close drawer-------------------------------------------------------
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  //to open and close stats-------------------------------------------------------
  const [openStats, setOpenStats] = React.useState(false);
  const handleClickStats = () => {
    setOpenStats(!openStats);
  };
  //to open and close Seo-------------------------------------------------------
  const [OpenSeo, setOpenSeo] = React.useState(false);
  const handleClickSeo = () => {
    setOpenSeo(!OpenSeo);
  };
  // to open and close Admin functionality----------------------------------------------------------------------
  const [OpenAdminFunctionality, setOpenAdminFunctionality] = React.useState(
    false
  );
  const handleClickOpenAdminFunctionality = () => {
    setOpenAdminFunctionality(true);
  };
  const handleCloseAdminFunctionality = () => {
    setOpenAdminFunctionality(false);
  };
  //to open and close openReportingGroupProperties----------------------------------------------------------------
  const [
    openReportingGroupProperties,
    setOpenReportingGroupProperties,
  ] = React.useState(false);
  const handleClickOpenReportingGroupProperties = () => {
    setOpenReportingGroupProperties(true);
  };
  const handleCloseReportingGroupProperties = () => {
    setOpenReportingGroupProperties(false);
  };
  //to open and close OpenSearchEngine---------------------------------------------------------------------------
  const [OpenSearchEngine, setOpenSearchEngine] = React.useState(false);
  const handleClickOpenSearchEngine = () => {
    setOpenSearchEngine(true);
  };
  const handleCloseSearchEngine = () => {
    setOpenSearchEngine(false);
  };
  //to open and close SEO Pages edit---------------------------------------------------------------------------
  const [OpenSEOPages, setOpenSEOPages] = React.useState(false);
  const handleClickOpenSEOPages = () => {
    setOpenSEOPages(true);
  };
  const handleCloseSEOPages = () => {
    setOpenSEOPages(false);
  };
  //to open and close Competitors---------------------------------------------------------------------------
  const [OpenCompetitors, setOpenCompetitors] = React.useState(false);
  const handleClickOpenCompetitors = () => {
    setOpenCompetitors(true);
  };

  const handleCloseCompetitors = () => {
    setOpenCompetitors(false);
  };
  //-to open and close Earning---------------------------------------------------------

  const [OpenEarning, setOpenEarning] = React.useState(false);
  const handleClickOpenEarning = () => {
    setOpenEarning(true);
  };
  const handleCloseEarning = () => {
    setOpenEarning(false);
  };
  //to open and close Revenue-------------------------------------------------------------------
  const [OpenRevenue, setOpenRevenue] = React.useState(false);

  const handleClickOpenRevenue = () => {
    setOpenRevenue(true);
  };
  const handleCloseRevenue = () => {
    setOpenRevenue(false);
  };
  //to open and close Page Grading-----------------------------------------------------------------
  const [OpenPageGradingRules, setOpenPageGradingRules] = React.useState(false);
  const handleClickOpenPageGradingRules = () => {
    setOpenPageGradingRules(true);
  };

  const handleCLosePageGradingRules = () => {
    setOpenPageGradingRules(false);
  };
  //to open and close Security--------------------------------------------------------------------
  const [OpenSecurity, setOpenSecurity] = React.useState(false);
  const handleClickOpenSecurity = () => {
    setOpenSecurity(true);
  };
  const handleCloseSecurity = () => {
    setOpenSecurity(false);
  };
  //Manage Blog--------------------------------------------------------------------------
  const [OpenNewBlog, setOpenNewBlog] = React.useState(false);
  const handleClickOpenNewBlog = () => {
    setOpenNewBlog(true);
  };
  const handleCloseNewBlog = () => {
    setOpenNewBlog(false);
  };
  //-----------------------------------------------------------------
  const [cookies, setCookie] = useCookies(["name"]); //to show welcome[name] in the header
  //logout function
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
            [classes.appBarShift]: openDrawer,
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
              className={clsx(classes.menuButton, openDrawer && classes.hide)}
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
          open={openDrawer}
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
              <ListItem
                button
                key="Functionality"
                onClick={handleClickOpenAdminFunctionality}
              >
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Admin Functionality" />
              </ListItem>
            </Tooltip>
          </List>
          <Dialog
            fullScreen
            open={OpenAdminFunctionality}
            onClose={handleCloseAdminFunctionality}
            TransitionComponent={Transition}
          >
            <AppBar style={{ background: "transparent", boxShadow: "none" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  onClick={handleCloseAdminFunctionality}
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
              <ListItem button onClick={handleClickStats}>
                <ListItemIcon>
                  <BarChartRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Stats" />
                {openStats ? (
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
            <Collapse in={openStats} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Earning">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpenEarning}
                  >
                    <ListItemIcon>
                      <TrendingUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Earning" />
                  </ListItem>
                </Tooltip>
                <Dialog
                  fullScreen
                  open={OpenEarning}
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
                  open={OpenRevenue}
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
            {/*SEO-------------------------------------------------------------------------------*/}
            <Tooltip title="SEO">
              <ListItem button onClick={handleClickSeo}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="SEO" />
                {OpenSeo ? (
                  <ExpandLess className={classes.icon} />
                ) : (
                    <ExpandMore className={classes.icon} />
                  )}
              </ListItem>
            </Tooltip>
            <Collapse in={OpenSeo} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                style={{ backgroundColor: Theme.palette.background.darkGreen }}
              >
                <Tooltip title="Pages Properties">
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={handleClickOpenSEOPages}
                  >
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pages Properties" />
                  </ListItem>
                </Tooltip>


                {/* SEO Page Dialog */}
                <Dialog
                  fullScreen
                  open={OpenSEOPages}
                  onClose={handleCloseSEOPages}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseSEOPages}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <div style={{ padding: "50px" }}>
                    <SEOPagesEdit />
                  </div>
                </Dialog>




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
                  open={openReportingGroupProperties}
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
                    onClick={handleClickOpenSearchEngine}
                  >
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search Engines" />
                  </ListItem>
                </Tooltip>


                <Dialog
                  fullScreen
                  open={OpenSearchEngine}
                  onClose={handleCloseSearchEngine}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseSearchEngine}
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
                    onClick={handleClickOpenCompetitors}
                  >
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Competitors" />
                  </ListItem>
                </Tooltip>


                <Dialog
                  fullScreen
                  open={OpenCompetitors}
                  onClose={handleCloseCompetitors}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseCompetitors}
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
                    onClick={handleClickOpenPageGradingRules}
                  >
                    <ListItemIcon>
                      <PieChartIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Page Grading Rules" />
                  </ListItem>
                </Tooltip>

                <Dialog
                  fullScreen
                  open={OpenPageGradingRules}
                  onClose={handleCLosePageGradingRules}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCLosePageGradingRules}
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
                    onClick={handleClickOpenSecurity}
                  >
                    <ListItemIcon>
                      <PieChartIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
                  </ListItem>
                </Tooltip>

                <Dialog
                  fullScreen
                  open={OpenSecurity}
                  onClose={handleCloseSecurity}
                  TransitionComponent={Transition}
                >
                  <AppBar
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        onClick={handleCloseSecurity}
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
            [classes.contentShift]: openDrawer,
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
