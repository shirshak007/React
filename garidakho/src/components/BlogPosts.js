import React, { useEffect } from "react";
import {
  makeStyles,
  IconButton,
  Avatar,
  Typography,
  Collapse,
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

import clsx from "clsx";
import Axios from "axios";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import CloseIcon from "@material-ui/icons/Close";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BlogTopImage from "../asset/images/pexels-photo-733745.jpeg";

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
  const [expanded, setExpanded] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [OpenCommentBox, setOpenCommentBox] = React.useState(false);
  const [CommentBoxId, setCommentBoxId] = React.useState("");
  const handleCloseCommentBox = () => {
    setOpenCommentBox(!OpenCommentBox);
  };
  const handleClickCommentBox = (CommentBoxId) => {
    setOpenCommentBox(!OpenCommentBox);
    setCommentBoxId(CommentBoxId);
  };
  console.log(CommentBoxId, OpenCommentBox);
  const [CarData, setCarData] = React.useState([]);
  useEffect(() => {
    getCarData();
  });

  async function getCarData() {
    const config = {
      method: "get",
      url: "https://private-anon-50a794b9c7-carsapi1.apiary-mock.com/cars",
      headers: {},
    };
    await Axios(config)
      .then((res) => {
        setCarData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={classes.blogposts}>
      {OpenCommentBox ? (
        <Dialog
          fullScreen
          open={OpenCommentBox}
          onClose={handleCloseCommentBox}
          TransitionComponent={Transition}
        >
          <AppBar style={{ background: "transparent", boxShadow: "none" }}>
            <Toolbar>
              <IconButton
                edge="start"
                onClick={handleCloseCommentBox}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          selected {CommentBoxId}
        </Dialog>
      ) : null}
      <Grid container spacing={1}>
        {CarData.map((Car) => (
          <Grid key={Car.id} item xs={12} sm={6} md={4}>
            <Card className={classes.cardroot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {
                      Car.model
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
                title={"Posted by " + Car.make + " " + Car.model}
                subheader="September 14, 2016" //will be replaced by blog date
              />
              <CardMedia
                className={classes.media}
                image={BlogTopImage}
                title="Paella dish"
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
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>

                <IconButton
                  edge="end"
                  aria-label="comment box"
                  onClick={() => handleClickCommentBox(Car.id)}
                >
                  {/* {OpenCommentBox ? <ExpandLess /> : <ExpandMore />} */}
                  Comment
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
