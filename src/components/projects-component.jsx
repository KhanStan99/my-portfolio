import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function ProjectsComponent() {
  const classes = useStyles();

  const projects = [
    {
      title: "Android Project",
      image:
        "https://www.edureka.co/blog/wp-content/uploads/2019/10/Android-Projects.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sapien at tortor fermentum congue. Integer dui est, eleifend at sagittis vel",
      target: "http://www.google.com",
    },
    {
      title: "ReactJS Project",
      image: "https://miro.medium.com/max/2674/1*o5JioPIf2Y7fwXWvhLf_CA.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor sapien at tortor fermentum congue.",
      target: "http://www.google.com",
    },
    {
      title: "My Project Three",
      image:
        "https://us.123rf.com/450wm/sunil4rnz4ever/sunil4rnz4ever1803/sunil4rnz4ever180301261/100284768-beautiful-scenari-in-norway.jpg?ver=6",
      description: "blah blah",
      target: "http://www.google.com",
    },
    {
      title: "My Project Four",
      image:
        "https://us.123rf.com/450wm/sunil4rnz4ever/sunil4rnz4ever1803/sunil4rnz4ever180301261/100284768-beautiful-scenari-in-norway.jpg?ver=6",
      description: "blah blah",
      target: "http://www.google.com",
    },
  ];

  const openProjects = (target) => {
    window.open(target, "_blank");
  };

  return projects.map((item) => {
    return (
      <Card key={item.title} style={{ textAlign: "start" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              openProjects(item.target);
            }}
          >
            View on Github
          </Button>
        </CardActions>
      </Card>
    );
  });
}
