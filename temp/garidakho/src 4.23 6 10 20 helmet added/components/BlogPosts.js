import React, { useRef, useState } from "react";
//import { useEffect } from "react";
import {
  makeStyles,
  useTheme,
  IconButton,
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  AppBar,
  Toolbar,
  Slide,
  Dialog,
  Popover,
  ListItem,
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Pagination from "@material-ui/lab/Pagination";

import CloseIcon from "@material-ui/icons/Close";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TwitterIcon from "@material-ui/icons/Twitter";
import ShowSingleBlogPost from "./ShowSingleBlogPost";
import CarData from "../asset/sellingCarData";

/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  blogposts: {
    marginBottom: theme.spacing(2),
    boxShadow: "2px 5px 5px grey",
    padding: theme.spacing(3),
    backgroundImage: `linear-gradient(to bottom right,#ffffff , #ccfff1 )`,
    backgroundRepeat: "no-repeat",
  },
  cardroot: {
    width: "100%",
    marginTop: "5px",
    marginBottom: "5px",
  },
  media: {
    height: 50,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  container: {
    marginBottom: theme.spacing(2),
  },
  typography: {
    margin: theme.spacing(1),
    color: "black",
  },

  text: {
    margin: theme.spacing(1),
    color: "white",
  },
  link: {
    color: "black",
    textDecoration: "inherit",
  },
}));

export default function BlogMain() {
  const classes = useStyles();
  const theme = useTheme();
  // const [expanded, setExpanded] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  //managing the color of like button!! INCOMPLETE!! Not possible without database
  const [LikeColor, setLikeColor] = React.useState(true); //manage liked post color
  const [LikeId, setLikeId] = React.useState(""); //manage which one is liked
  const [OldLikeId, setOldLikeId] = React.useState([""]); //manage which one is liked
  const [OpenSingleBlogPost, setOpenSingleBlogPost] = React.useState(false);
  const [SingleBlogPostId, setSingleBlogPostId] = React.useState("");
  const handleClickLike = (NewLikeId) => {
    setLikeId(NewLikeId);
    setOldLikeId(OldLikeId + NewLikeId);
    setLikeColor(NewLikeId === LikeId ? !LikeColor : LikeColor);
  };
  //closing the blogpost dialog-------------------------------------------------------------------------------------
  const handleCloseSingleBlogPost = () => {
    setOpenSingleBlogPost(!OpenSingleBlogPost);
  };
  const handleClickSingleBlogPost = (SingleBlogPostId) => {
    setOpenSingleBlogPost(!OpenSingleBlogPost);
    setSingleBlogPostId(SingleBlogPostId);
  };
  //show and manage the share button------------------------------------------------------------------------
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
  //manage copy to clip board-------------------------------------------------------------
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
  // console.log(CarData[Number(Share)]); //Typecasting as Share is a string
  return (
    <div className={classes.blogposts}>
      {OpenSingleBlogPost ? (
        <Dialog
          fullScreen
          open={OpenSingleBlogPost}
          onClose={handleCloseSingleBlogPost}
          TransitionComponent={Transition}
        >
          <AppBar
            style={{
              background: "transparent",
              boxShadow: "none",
              marginTop: theme.spacing(2),
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                onClick={handleCloseSingleBlogPost}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <ShowSingleBlogPost id={SingleBlogPostId} />
        </Dialog>
      ) : null}
      <Grid container spacing={1}>
        {CarData.map((Car) => (
          <Grid key={Car.id} item xs={12} sm={6} md={4}>
            <Card className={classes.cardroot}>
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
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={"Posted by " + Car.body + " " + Car.title}
                subheader="September 14, 2016" //will be replaced by blog date
              />
              <CardMedia
                onClick={() => handleClickSingleBlogPost(Car.id)}
                className={classes.media}
                image={Car.img}
                title={Car.desc}
              >
                {/* 
                if need custom image div
                <img
                  className={classes.image}
                  src={Car.img_url}
                  //src="https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png"
                  alt={Car.name}
                  //url to be replaced by database url
                  width="320"
                  height="240"
                /> */}
              </CardMedia>
              <CardContent
                style={{
                  backgroundColor: "white",
                }}
              >
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={() => handleClickLike(Car.id)}
                  aria-label="add to favorites"
                >
                  {/* {console.log(OldLikeId.includes(Car.id), OldLikeId, Car.id)} */}
                  <FavoriteIcon
                    style={{
                      color:
                        LikeColor && OldLikeId.includes(Car.id) ? "red" : "",
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label="comment box"
                  onClick={() => handleClickSingleBlogPost(Car.id)}
                >
                  {/* {OpenSingleBlogPost ? <ExpandLess /> : <ExpandMore />} */}
                  <CommentIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => handleClickShare(e, Car.id)}
                  aria-label="share"
                >
                  <ShareIcon />
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
                    <div onClick={copyToClipboard} className={classes.link}>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination style={{ marginTop: "20px" }} count={10} color="secondary" />
    </div>
  );
}
