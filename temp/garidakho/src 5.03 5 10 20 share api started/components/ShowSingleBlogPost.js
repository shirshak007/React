import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  CardContent,
  Card,
  Container,
  Box,
  Popover,
  Grid,
  Avatar,
  TextField,
  Button,
  CardHeader,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Rating from "@material-ui/lab/Rating";
import CarData from "../asset/sellingCarData";
import Theme from "./Theme";

/*Custom Style*/
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  container: {
    marginBottom: theme.spacing(2),
    maxWidth: "75%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%",
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  comments: {
    marginTop: theme.spacing(1),
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  comment: {
    marginTop: theme.spacing(1),

    paddingLeft: "10px",

    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  cardtypography: {
    color: Theme.palette.background.darkBlue,
  },
  card: {
    width: "75%",
  },
  media: {
    width: "100%",
  },
  imagebox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  popover: {
    pointerEvents: "none",
  },
  popoverpaper: {
    padding: theme.spacing(1),
    color: "white",
    backgroundColor: Theme.palette.background.darkBlue,
  },
}));

export default function ShowSingleBlogPost(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  /*This anchorEl is to handle the mouse event, on hover it shows the rating*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const [RatingValue, setRatingValue] = React.useState(0);
  const [Comment, setComment] = React.useState("");
  const handleChangeComment = (comment) => {
    setComment(comment);
  };
  console.log(Comment);
  return (
    <div className={classes.root}>
      {CarData.map((Car) => {
        if (Car.id === props.id) {
          return (
            <Container key={Car.id} className={classes.container}>
              <Card className={classes.Card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="blogpost" className={classes.avatar}>
                      {
                        Car.title
                          .charAt(0)
                          .toUpperCase() /*This shows the first character of car name in uppercase*/
                      }
                    </Avatar>
                  }
                  title={"Posted by " + Car.body + " " + Car.title}
                  subheader="September 14, 2016" //will be replaced by blog date
                />
                <Paper className={classes.media}>
                  <div className={classes.imagebox}>
                    <img
                      className={classes.image}
                      width="960"
                      height="540"
                      src={Car.img}
                      alt={Car.title}
                    />
                  </div>
                </Paper>

                <CardContent>
                  <Box
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    component="fieldset"
                    borderColor="transparent"
                  >
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="read-only"
                      defaultValue={
                        /*this is used to show the fraction rating*/
                        (Math.floor(Car.rating) + Math.ceil(Car.rating)) / 2
                      }
                      precision={0.5}
                      readOnly
                    />
                    <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.popoverpaper,
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>{Car.rating}</Typography>
                    </Popover>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {Car.distance} km
                    {bull}
                    {Car.fuel}
                    {bull}
                    Owner {Car.owner}
                  </Typography>

                  {/* comments */}
                  <div className={classes.comments}>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        style={{
                          position: "relative",
                        }}
                      >
                        <Typography
                          style={{
                            left: 0,
                            bottom: 0,
                            top: "auto",
                            right: "auto",
                            position: "absolute",
                          }}
                          variant="h5"
                        >
                          Comments
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Box display="flex" flexDirection="row-reverse">
                          <Rating
                            name="rating"
                            value={RatingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                          />

                          <Typography>Rate This</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    {/* This below part will be repeated for each comment */}
                    <Grid container spacing={3}>
                      <Grid
                        item
                        className={classes.comment}
                        xs={2}
                        sm={1}
                        md={1}
                        lg={1}
                      >
                        <div className={classes.comment}>
                          <Avatar
                            aria-label="blogpost"
                            className={classes.avatar}
                          >
                            {
                              Car.title
                                .charAt(0)
                                .toUpperCase() /*This shows the first character of Car name in uppercase*/
                            }
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid
                        className={classes.comment}
                        item
                        xs={10}
                        sm={11}
                        md={11}
                        lg={11}
                      >
                        <div
                          className={classes.comment}
                          style={{ padding: "10px" }}
                        >
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Comment from {Car.title}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        className={classes.comment}
                        xs={2}
                        sm={1}
                        md={1}
                        lg={1}
                      >
                        <div className={classes.comment}>
                          <Avatar
                            aria-label="blogpost"
                            className={classes.avatar}
                          >
                            {
                              Car.title
                                .charAt(0)
                                .toUpperCase() /*This shows the first character of Car name in uppercase*/
                            }
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid
                        item
                        className={classes.comment}
                        xs={10}
                        sm={11}
                        md={11}
                        lg={11}
                      >
                        <div className={classes.comment}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Comment from {Car.title}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        className={classes.comment}
                        xs={2}
                        sm={1}
                        md={1}
                        lg={1}
                      >
                        <div className={classes.comment}>
                          <Avatar
                            aria-label="blogpost"
                            className={classes.avatar}
                          >
                            {
                              Car.title
                                .charAt(0)
                                .toUpperCase() /*This shows the first character of Car name in uppercase*/
                            }
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={8} sm={9} md={9} lg={9}>
                        <div
                          className={classes.comment}
                          style={{ padding: "10px" }}
                        >
                          <TextField
                            id="comment"
                            label="Type your comment"
                            multiline
                            value={Comment}
                            variant="outlined"
                            color="secondary"
                            onChange={(e) =>
                              handleChangeComment(e.target.value)
                            }
                          />
                        </div>
                      </Grid>
                      <Grid
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "left",
                          justifyContent: "center",
                        }}
                        item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                      >
                        <Button
                          className={classes.comment}
                          style={{
                            padding: "10px",
                            backgroundColor: "#e0e0e0",
                          }}
                        >
                          <SendIcon
                            style={{
                              padding: "5px",
                              color: "#00b7ff",
                            }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </Card>
            </Container>
          );
        }
        return null;
      })}
    </div>
  );
}
