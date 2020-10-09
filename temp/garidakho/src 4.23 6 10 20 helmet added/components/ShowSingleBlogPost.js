import React, { useRef, useState } from "react";
import {
  makeStyles,
  Typography,
  Paper,
  CardContent,
  Card,
  ListItem,
  IconButton,
  Container,
  Box,
  Popover,
  Grid,
  Avatar,
  TextField,
  CardHeader,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Rating from "@material-ui/lab/Rating";
import CarData from "../asset/sellingCarData";
import ShareIcon from "@material-ui/icons/Share";

import FileCopyIcon from "@material-ui/icons/FileCopy";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

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
  link: {
    color: "black",
    textDecoration: "inherit",
  },
  commenticon: {
    width: "70%",
    height: "80%",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "70%",
    },
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
  /*===================================================*/
  const open = Boolean(anchorEl);
  const [RatingValue, setRatingValue] = React.useState(0);
  const [Comment, setComment] = React.useState("");
  const handleChangeComment = (comment) => {
    setComment(comment);
  };
  /*handle like events
  -------------------------------------------------------*/
  const [LikeColor, setLikeColor] = React.useState(true); //manage liked post color
  const [LikeId, setLikeId] = React.useState(""); //manage which one is liked
  const [OldLikeId, setOldLikeId] = React.useState([""]); //manage which one is liked

  const handleClickLike = (NewLikeId) => {
    setLikeId(NewLikeId);
    setOldLikeId(OldLikeId + NewLikeId);
    setLikeColor(NewLikeId === LikeId ? !LikeColor : LikeColor);
  };

  const handleClickComment = () => {
    document.getElementById("comment").focus();
  };
  /*handle share button click
  -------------------------------------------------------*/
  const [AnchorElShare, setAnchorElShare] = React.useState(null);
  const [Share, setShare] = React.useState("");
  const handleClickShare = (event, id) => {
    setAnchorElShare(event.currentTarget);
    setShare(id);
  };

  const handleCloseShare = () => {
    setAnchorElShare(null);
  };
  const openShare = Boolean(AnchorElShare);
  const ShareId = openShare ? "simple-popover" : undefined;
  /*------------------------------------------------------------*/
  //copy text
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }
  // console.log(CarData[Number(Share)]);
  /*--------------------------------------------------------------*/
  console.log(RatingValue);
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
                  <Grid container>
                    <Grid item xs={6}>
                      <Box display="flex" flexDirection="column">
                        <Typography>Rate This</Typography>
                        <Rating
                          name="rating"
                          value={RatingValue}
                          onChange={(event, newValue) => {
                            setRatingValue(newValue);
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box display="flex" flexDirection="row-reverse">
                        <IconButton
                          onClick={(e) => handleClickShare(e, Car.id)}
                          aria-label="share"
                        >
                          <ShareIcon />
                        </IconButton>
                        <IconButton
                          aria-label="comment box"
                          onClick={handleClickComment}
                        >
                          {/* {OpenSingleBlogPost ? <ExpandLess /> : <ExpandMore />} */}
                          <CommentIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleClickLike(Car.id)}
                          aria-label="add to favorites"
                        >
                          {/* {console.log(OldLikeId.includes(Car.id), OldLikeId, Car.id)} */}
                          <FavoriteIcon
                            style={{
                              color:
                                LikeColor && OldLikeId.includes(Car.id)
                                  ? "red"
                                  : "",
                            }}
                          />
                        </IconButton>
                        <Popover
                          id={ShareId}
                          open={openShare}
                          anchorEl={AnchorElShare}
                          onClose={handleCloseShare}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <ListItem>
                            <textarea
                              ref={textAreaRef}
                              value="https://garidakho.com"
                              readOnly
                            />
                            {/*Here we write some custom share api*/}
                            <div
                              onClick={copyToClipboard}
                              className={classes.link}
                            >
                              <FileCopyIcon />
                              {copySuccess}
                            </div>
                            <div
                              className={classes.link}
                              data-href="https://garidakho.com/blog"
                              data-layout="button"
                              data-size="small"
                            >
                              <a
                                className={classes.link}
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgaridakho.com%2Fblog&amp;src=sdkpreparse"
                              >
                                <FacebookIcon alt="fb" />
                              </a>
                            </div>{" "}
                            <a
                              className={classes.link}
                              href={
                                "https://api.whatsapp.com/send?text=textToshare " +
                                window.location
                                  .href /*this window.location.href gives the current url*/ +
                                " " +
                                CarData[Number(Share)].desc
                              }
                              data-action="share/whatsapp/share"
                            >
                              <WhatsAppIcon alt="wa" />
                            </a>
                            <a
                              className={classes.link}
                              href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=http://garidakho.com/blog" //change the content here
                              data-show-count="false"
                            >
                              <TwitterIcon alt="twi" />
                              <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charSet="utf-8"
                              ></script>
                            </a>
                          </ListItem>
                        </Popover>
                      </Box>
                    </Grid>
                  </Grid>
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
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Box
                          display="flex"
                          flexDirection="row-reverse"
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                          borderColor="transparent"
                        >
                          <Rating
                            name="read-only"
                            defaultValue={
                              /*this is used to show the fraction rating*/
                              (Math.floor(Car.rating) + Math.ceil(Car.rating)) /
                              2
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
                          <Typography component="legend">Rating</Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{
                          position: "relative",
                        }}
                      >
                        <Typography variant="h5">Comments</Typography>
                      </Grid>{" "}
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
                    <Grid container spacing={1}>
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
                        <div className={classes.comment}>
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
                        <IconButton className={classes.commenticon}>
                          <SendIcon fontSize="large" />
                        </IconButton>
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
