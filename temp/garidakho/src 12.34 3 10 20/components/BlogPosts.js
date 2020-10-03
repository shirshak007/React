import React from "react";
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
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Pagination from "@material-ui/lab/Pagination";

import CloseIcon from "@material-ui/icons/Close";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
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
}));

export default function BlogMain() {
  const classes = useStyles();
  const theme = useTheme();
  // const [expanded, setExpanded] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
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
  const handleCloseSingleBlogPost = () => {
    setOpenSingleBlogPost(!OpenSingleBlogPost);
  };
  const handleClickSingleBlogPost = (SingleBlogPostId) => {
    setOpenSingleBlogPost(!OpenSingleBlogPost);
    setSingleBlogPostId(SingleBlogPostId);
  };
  //console.log(OldLikeId.includes(LikeId), LikeId, OldLikeId);
  // const [CarData, setCarData] = React.useState([]);
  // useEffect(() => {
  //   getCarData();
  // });

  // async function getCarData() {
  //   const config = {
  //     method: "get",
  //     url: "https://private-anon-50a794b9c7-carsapi1.apiary-mock.com/cars",
  //     headers: {},
  //   };
  //   await Axios(config)
  //     .then((res) => {
  //       setCarData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

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
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination style={{ marginTop: "20px" }} count={10} color="secondary" />
    </div>
  );
}
