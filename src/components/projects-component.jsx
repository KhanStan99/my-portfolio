import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 240,
  },
  chip: {
    display: "flex",
    color: "#FFF",
    justifyContent: "start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  cards: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
    textAlign: "start",
  },
}));

export default function ProjectsComponent() {
  const classes = useStyles();

  const projects = [
    {
      title: "Covid 19 Tracker",
      image:
        "https://static.wixstatic.com/media/8443ed_907b0743b641488abe35a9947646ee03~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/8443ed_907b0743b641488abe35a9947646ee03~mv2.jpg",
      description:
        "In December 2019, a novel coronavirus strain (SARS-CoV-2) emerged in the city of Wuhan, China. I created a tracking application specifically for Indian regions which shows detailed list of cases from all over India.",
      target: [
        {
          label: "View on Github",
          target: "https://github.com/KhanStan99/Covid-19Tracker-ReactJS",
        },
        {
          label: "View on Web",
          target: "https://cv19tracker.firebaseapp.com/",
        },
      ],
      tags: ["ReactJS", "Material UI", "Java Script", "HTMl/CSS"],
    },
    {
      title: "Angular Login Structure",
      image: "https://miro.medium.com/max/3492/1*P7x-_0XfQz6CVmMY_QAv0w.png",
      description:
        "Its a basic Angular application which show how to maintain user session and route from login to home screen by notifying other components",
      target: [
        {
          label: "View on Github",
          target: "https://github.com/KhanStan99/Angular-Basic-Login-Structure",
        },
      ],
      tags: ["Angular", "Type Script", "HTMl/CSS"],
    },
    {
      title: "Android MVVM Structure",
      image: "https://miro.medium.com/max/960/1*kWwjlkOEyTV6M7W7tZrs1w.png",
      description:
        "Android project MVVM structure. You can use this to avoid writing boiler plate code for your new projects.",
      target: [
        {
          label: "View on Github",
          target: "https://github.com/KhanStan99/AndroidMVVMBaseStructure",
        },
      ],
      tags: ["Android", "MVVM", "Kotlin", "XML"],
    },
    {
      title: "Android MVVM Structure",
      image: "https://miro.medium.com/max/960/1*kWwjlkOEyTV6M7W7tZrs1w.png",
      description:
        "Android project MVVM structure. You can use this to avoid writing boiler plate code for your new projects.",
      target: [
        {
          label: "View on Github",
          target: "https://github.com/KhanStan99/AndroidImageCompressor",
        },
        {
          label: "View on Play Store",
          target:
            "https://play.google.com/store/apps/details?id=in.trentweet.imagecompressor",
        },
      ],
      tags: ["Android", "MVVM", "Kotlin", "XML"],
    },
  ];

  const openProjects = (target) => {
    window.open(target, "_blank");
  };

  return projects.map((item) => {
    return (
      <Card key={item.title} className={classes.cards}>
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
          <div className={classes.chip}>
            {item.tags.map((tag) => {
              return <Chip label={tag} key={tag} />;
            })}
          </div>
        </CardActionArea>
        <CardActions>
          {item.target.map((target) => {
            return (
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  openProjects(target.target);
                }}
              >
                {target.label}
              </Button>
            );
          })}
        </CardActions>
      </Card>
    );
  });
}
