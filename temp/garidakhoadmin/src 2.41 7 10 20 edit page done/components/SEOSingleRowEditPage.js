import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import SEOData from "../asset/SEOData";
//const editJsonFile = require("edit-json-file");
//let file = editJsonFile(`../asset/CarData1.js`);

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
  form: {
    width: "50%",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default function SingleRowEditPage(props) {
  const classes = useStyles();
  //Title Change------------------------------------------
  const [Title, setTitle] = React.useState("");
  const handleChangeTitle = (value) => {
    setTitle(value);
  };
  //Keyword Change------------------------------------------
  const [Keyword, setKeyword] = React.useState("");
  const handleChangeKeyword = (value) => {
    setKeyword(value);
  };
  //Page Name Change------------------------------------------
  const [Pagename, setPagename] = React.useState("");
  const handleChangePagename = (value) => {
    setPagename(value);
  };
  //Description Change------------------------------------------
  const [Description, setDescription] = React.useState("");
  const handleChangeDescription = (value) => {
    setDescription(value);
  };
  //Page URL Change------------------------------------------
  const [Pageurl, setPageurl] = React.useState("");
  const handleChangePageurl = (value) => {
    setPageurl(value);
  };
  console.log(Title, Keyword, Pagename, Description, Pageurl);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4">UPDATE PAGE DETAILS</Typography>
        <div className={classes.form}>
          <Grid
            style={{ marginTop: "10px" }}
            container
            className={classes.grid}
            spacing={2}
          >
            {SEOData.map((page) => {
              if (page.id === props.id) {
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
                            defaultValue={page.keyword}
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
                            label="Page Name"
                            id="pagename"
                            defaultValue={page.pagename}
                            onChange={(e) =>
                              handleChangePagename(e.target.value)
                            }
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
                            defaultValue={page.pageurl}
                            onChange={(e) =>
                              handleChangePageurl(e.target.value)
                            }
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                          >
                            UPDATE page
                          </Button>
                        </form>
                      </div>
                    </Paper>
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
