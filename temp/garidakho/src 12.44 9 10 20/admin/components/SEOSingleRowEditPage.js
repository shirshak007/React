import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Dialog,
  Slide,
} from "@material-ui/core";
import Sentry from "react-activity/lib/Sentry";

import "react-activity/lib/Sentry/Sentry.css";
import Axios from "axios";
import qs from "qs";

/* ------ Dialog Open Transition ------ */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    width: "100%",
  },
  pageform: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function SingleRowEditPage(props) {
  const classes = useStyles();

  //Page seo data ----------------------------------------
  const [seoData, setSeoData] = useState([]);

  //dialog open true or not
  const [dialogOpen, setdialogOpen] = useState(false);

  //loading idicator
  const [loading, setLoading] = useState(false);

  //success message
  const [message, setMessage] = useState("");

  //Title Change------------------------------------------
  const [Title, setTitle] = useState("");
  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  //Keyword Change------------------------------------------
  const [Keyword, setKeyword] = useState("");
  const handleChangeKeyword = (value) => {
    setKeyword(value);
  };

  //Page Name Change------------------------------------------
  const [Pagename, setPagename] = useState("");
  const handleChangePagename = (value) => {
    setPagename(value);
  };

  //Description Change------------------------------------------
  const [Description, setDescription] = useState("");
  const handleChangeDescription = (value) => {
    setDescription(value);
  };

  //Page URL Change------------------------------------------
  const [Pageurl, setPageurl] = useState("");
  const handleChangePageurl = (value) => {
    setPageurl(value);
  };

  /* ------ useEffect Calling ------  */

  useEffect(() => {
    // Calling get_page_data_for_edit -------
    if (props.id) {
      get_page_data_for_edit();
    }
  }, []);

  /* ------ Get page data by id from api ------ */
  const get_page_data_for_edit = async () => {
    var config = {
      method: "get",
      url: "http://garidakho.com/new_api/page_seo/?id=" + props.id,
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        setSeoData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* ------ On update submit ------ */
  const update = () => {
    setLoading(true);
    dialogHandler();

    var id = "";
    var title = "";
    var page_name = "";
    var keywords = "";
    var description = "";
    var page_url = "";
    seoData.forEach((element) => {
      id = element.id;
      title = element.title;
      page_name = element.page_name;
      keywords = element.keywords;
      description = element.description;
      page_url = element.page_url;
    });
    title = Title !== "" ? Title : title;
    keywords = Keyword !== "" ? Keyword : keywords;
    description = Description !== "" ? Description : description;
    page_url = Pageurl !== "" ? Pageurl : page_url;

    // var data = JSON.stringify({ "update": "title", "title": title, "id": id });
    // var data = { "update": "title", "title": title, "id": id };

    var data = JSON.stringify({
      update: {
        title: title,
        keywords: keywords,
        description: description,
        page_url: page_url,
      },
      id: id,
    });

    var config = {
      method: "put",
      url: "http://garidakho.com/new_api/page_seo/",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'text/html; charset=UTF-8',
        Accept: "application/json",
      },
      data: data,
    };

    console.log(data);

    Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoading(true);

        if (response.data.success) {
          // show success message
          setMessage(response.data.message);
        } else {
          //show error message
          setMessage(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* ------ On new page add ------ */
  const addSeo = async () => {
    setLoading(true);
    dialogHandler();
    if (Title && Keyword && Pagename && Description && Pageurl) {
      // convert query to string
      var data = qs.stringify({
        page_name: Pagename,
        title: Title,
        keywords: Keyword,
        description: Description,
        page_url: Pageurl,
      });

      // setting configuration for axios
      var config = {
        method: "post",
        url: "http://garidakho.com/new_api/page_seo/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      await Axios(config)
        .then(function (response) {
          //loading stop
          setLoading(false);

          if (response.data.success) {
            // show success message
            setMessage(response.data.message);
          } else {
            //show error message
            setMessage(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const dialogHandler = () => {
    setdialogOpen(!dialogOpen);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4">UPDATE PAGE DETAILS</Typography>
        <div>
          <Grid
            style={{ marginTop: "10px" }}
            container
            className={classes.grid}
            spacing={2}
          >
            {seoData.length > 0 ? (
              seoData.map((page) => {
                return (
                  <Grid key={page.id} item xs={12}>
                    <Paper>
                      <div className={classes.pageform}>
                        <form className={classes.form} noValidate>
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            id="pageid"
                            label="PAGE ID (CAN'T UPDATE)"
                            name="pageid"
                            value={page.id}
                            disabled
                          />
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="title"
                            label="Page Title"
                            id="title"
                            defaultValue={page.title}
                            onChange={(e) => handleChangeTitle(e.target.value)}
                          />
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="keyword"
                            label="Keyword"
                            id="keyword"
                            defaultValue={page.keywords}
                            onChange={(e) =>
                              handleChangeKeyword(e.target.value)
                            }
                          />
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="pagename"
                            label="Page Name (CAN'T UPDATE)"
                            id="pagename"
                            value={page.page_name}
                            disabled
                          />
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                            defaultValue={page.description}
                            onChange={(e) =>
                              handleChangeDescription(e.target.value)
                            }
                          />
                          <TextField
                            variant="outlined"
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="pageurl"
                            label="Page URL"
                            id="pageurl"
                            defaultValue={page.page_url}
                            onChange={(e) =>
                              handleChangePageurl(e.target.value)
                            }
                          />
                        </form>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          className={classes.submit}
                          onClick={() => update()}
                        >
                          Update page
                        </Button>
                      </div>
                    </Paper>
                  </Grid>
                );
              })
            ) : (
              <div>
                <Grid item xs={12}>
                  <Paper>
                    <div className={classes.pageform}>
                      {/* ------ Form starting from here ------*/}
                      <form className={classes.form} noValidate>
                        {/* ------ id text field ------*/}
                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          id="pageid"
                          label="PAGE ID (CAN'T UPDATE)"
                          name="pageid"
                          value={1}
                          disabled
                        />

                        {/* ------ Page Title text field ------*/}
                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          name="title"
                          label="Page Title"
                          id="title"
                          placeholder="Page Title"
                          onChange={(e) => handleChangeTitle(e.target.value)}
                        />

                        {/* ------ keyword text field ------*/}

                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          name="keyword"
                          label="Keyword"
                          id="keyword"
                          placeholder="Keywords"
                          onChange={(e) => handleChangeKeyword(e.target.value)}
                        />

                        {/* ------ pagename text field ------*/}
                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          name="pagename"
                          label="Page Name"
                          id="pagename"
                          placeholder="Page name"
                          onChange={(e) => handleChangePagename(e.target.value)}
                        />

                        {/* ------ description text field ------*/}
                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          name="description"
                          label="Description"
                          id="description"
                          placeholder="page description"
                          onChange={(e) =>
                            handleChangeDescription(e.target.value)
                          }
                        />

                        {/* ------ pageurl text field ------*/}
                        <TextField
                          variant="outlined"
                          color="secondary"
                          margin="normal"
                          required
                          fullWidth
                          name="pageurl"
                          label="Page URL"
                          id="pageurl"
                          placeholder="Page Url"
                          onChange={(e) => handleChangePageurl(e.target.value)}
                        />
                      </form>

                      {/* ------ Add seo button ------*/}
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={() => addSeo()}
                      >
                        Add SEO
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </div>
            )}
          </Grid>
        </div>
      </div>

      {/* ------ Edit Dialog Start ------ */}

      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ margin: "50px" }}>
          {loading ? (
            <Sentry color="#727981" size={32} speed={1} animating={true} />
          ) : null}
          {message !== "" ? (
            <div>
              {message}
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => dialogHandler()}
              >
                Back
              </Button>
            </div>
          ) : null}
        </div>
      </Dialog>

      {/* ------ Edit Dialog End ------ */}
    </div>
  );
}
