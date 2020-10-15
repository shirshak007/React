import React from "react";

import {
  makeStyles,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Divider,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";

import Theme from "./Theme";
// import ImageUpload from "./ImageUpload";

import CloseIcon from "@material-ui/icons/Close";
import Axios from "axios";
// import fs from "fs";
import FormData from "form-data";
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  newpost: {
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
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

  typography: {
    margin: theme.spacing(1),
    color: Theme.palette.background.darkBlue,
  },

  text: {
    fontFamily: "lato",
    fontSize: 18,
  },
  comment: {
    padding: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
    },
  },
  submit: {
    width: "50%",
  },
}));

export default function AdminFunctionality(props) {
  const classes = useStyles();

  const [TitleValue, setTitleValue] = React.useState("");
  const [DescriptionValue, setDescriptionValue] = React.useState("");
  const [ImageUrlValue, setImageUrlValue] = React.useState("");
  const [Image, setImage] = React.useState(null);
  const [OpenSnackbar, setOpenSnackbar] = React.useState(false); //to show success message
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleChangeTitleValue = (newValue) => {
    setTitleValue(newValue);
  };
  const handleChangeDescriptionValue = (newValue) => {
    setDescriptionValue(newValue);
  };
  const handleChangeImageUrlValue = (newValue) => {
    setImageUrlValue(newValue);
  };
  // const handleChangeImage = (newImage) => {
  //   setImage(newImage);

  // };

  //on upload post click
  const handleClickPost = () => {
    var data = new FormData();
    data.append("admin_name", "amio");
    data.append("blog_title", TitleValue);
    data.append("blog_description", DescriptionValue);
    data.append("blog_image", Image); //try fs

    var config = {
      method: "post",
      url: "http://garidakho.com/new_api/gd_blog/",
      headers: {
        // ...data.getHeaders(),
        "content-type": "multipart/form-data",
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        response.data.success ? setOpenSnackbar(true) : setOpenSnackbar(false);
        if (response.data.success == true) {
          setTimeout(function () {
            window.location.href = "/adminhome";
          }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Typography className={classes.typography} variant="h5">
          NEW POST
        </Typography>
      </div>
      <div className={classes.newpost}>
        <Grid container spacing={1}>
          <Grid item className={classes.comment} xs={3} sm={2} md={2} lg={2}>
            <div className={classes.comment}>
              <Box>Blog Title (50 characters)</Box>
            </div>
          </Grid>
          <Grid item xs={9} sm={10} md={10} lg={10}>
            <div className={classes.comment} style={{ padding: "10px" }}>
              <TextField
                id="title"
                label="Post Title"
                multiline
                variant="outlined"
                color="secondary"
                onChange={(e) => handleChangeTitleValue(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item className={classes.comment} xs={3} sm={2} md={2} lg={2}>
            <div className={classes.comment}>
              <Box>Description (500 words)</Box>
            </div>
          </Grid>
          <Grid item xs={9} sm={10} md={10} lg={10}>
            <div className={classes.comment} style={{ padding: "10px" }}>
              <TextField
                id="description"
                label="Post Description"
                multiline
                variant="outlined"
                color="secondary"
                onChange={(e) => handleChangeDescriptionValue(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item className={classes.comment} xs={3} sm={2} md={2} lg={2}>
            <div className={classes.comment}>
              <Box>Image</Box>
            </div>
          </Grid>
          <Grid className={classes.comment} item xs={4} sm={4} md={4} lg={4}>
            <div className={classes.comment} style={{ padding: "10px" }}>
              <TextField
                id="url"
                label="Enter Url"
                multiline
                variant="outlined"
                color="secondary"
                onChange={(e) => handleChangeImageUrlValue(e.target.value)}
              />
            </div>
          </Grid>
          <Grid className={classes.comment} item xs={5} sm={6} md={6} lg={6}>
            {/* <ImageUpload
              // newImage={Image}
              onchangeimage={(e) => {
                handleChangeImage(e);
              }}
            /> */}
            <input
              type="file"
              id="avatar"
              name="avatar"
              // accept="image/png, image/jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          className={classes.comment}
          style={{ alignItems: "center", padding: 20 }}
          item
          xs={12}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleClickPost}
          >
            POST
          </Button>
        </Grid>
      </div>
      {/*SnackBar*-------------------------------------------*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={OpenSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="New Post Added"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Container>
  );
}
