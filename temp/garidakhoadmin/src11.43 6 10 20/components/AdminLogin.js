import React, { useState } from "react";
import MUICookieConsent from "material-ui-cookie-consent";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useCookies } from "react-cookie";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  navlink: {
    textDecoration: "inherit",
    fontFamily: "lato",
    color: "#363130",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  let users = [
    {
      id: 1,
      userid: "admin",
      password: "admin",
    },
  ];
  const history = useHistory();
  const [userid, setuserid] = useState(""); //replace by database
  const [password, setPassword] = useState(""); //replace by database
  const [cookies, setCookie] = useCookies([
    "name",
  ]); /*to manage auto login.. when user enter by direct url if already logged in redirect to homepage. */
  function validateForm() {
    return userid.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (users[0].userid === userid && users[0].password === password) {
      //alert("Login Success");
      setCookie("name", userid, { path: "/" });

      history.push("/adminhome");
    } else {
      alert("id & password not matched");
      cookies.name = "";
      setuserid("");
      setPassword("");
    }
  }

  //console.log(cookies.name);
  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login Panel
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="userid"
            label="Enter ID"
            name="userid"
            value={userid}
            onChange={(e) => setuserid(e.target.value)}
          />
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Sign In
          </Button>
        </form>
      </div>
      <MUICookieConsent
        cookieName="mySiteCookieConsent"
        componentType="Snackbar" // default value is Snackbar
        message="This site uses cookies."
      />
    </div>
  );
}
