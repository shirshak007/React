import React, { useEffect, useState } from "react";

import { makeStyles, Button, Typography } from "@material-ui/core";

import Axios from "axios";
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
}));

export default function UserActivation(props) {
  const classes = useStyles();

  //initialization
  const [Activated, setActivated] = useState(false); //if successfully activated show login option
  //handling activation
  const ActivationInit = async () => {
    var config = {
      method: "get",
      url:
        "http://garidakho.com/new_api/user_activation/?token=" +
        props.match.params.token +
        "&email=" +
        props.match.params.email,
      headers: {},
    };

    Axios(config)
      .then(function (response) {
        if (response.data.success) {
          activate(props.match.params.token, props.match.params.email);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const activate = async (token, email) => {
    // console.log();
    // console.log(props.match.params.email);
    var data = JSON.stringify({
      update: "used",
      used: "1",
      token: token,
      email: email,
    });

    var config = {
      method: "put",
      url: "http://garidakho.com/new_api/user_activation/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        if (response.data.success) {
          setActivated(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //function call
  useEffect(() => {
    // console.log("error");
    ActivationInit();
  }, []);

  return (
    <div className={classes.container}>
      {Activated ? (
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>User Activated Successfully</Typography>
          <Button variant="contained" color="primary" href="/login">
            Login
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
