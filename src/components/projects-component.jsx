import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid2,
  Typography,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 240,
  },
  chip: {
    display: 'flex',
    color: '#FFF',
    justifyContent: 'start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  cards: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1.5),
    textAlign: 'start',
  },
}));

export default function ProjectsComponent() {
  const classes = useStyles();

  const projects = [
    {
      title: 'Quran Tracker',
      image:
        'https://private-user-images.githubusercontent.com/25157365/374139554-bbbe3543-ed6f-45b0-85f7-aa9899984c50.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTg2OTksIm5iZiI6MTcyODI5ODM5OSwicGF0aCI6Ii8yNTE1NzM2NS8zNzQxMzk1NTQtYmJiZTM1NDMtZWQ2Zi00NWIwLTg1ZjctYWE5ODk5OTg0YzUwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDEwNTMxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ2MGE0ZjY5YWIxY2MwODk3NDdmYTg4YjA3MGRmOTNhNmYwMDE1MjgxMDQ3OWU3OGIyZjFiMjNiMjkyNDk5NGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.x9eLWzrAK-RB0lNgLfSrGtPjrPAxumMvBRpJVyWBgzQ',
      description: 'An app for tracking your Quran progress with statistics.',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/quran-tracker',
        },
        {
          label: 'View on Web',
          target: 'https://quran-read-tracker.web.app/',
        },
      ],
      tags: ['ReactJS', 'Material UI', 'Redux Toolkit', 'Firebase'],
    },

    {
      title: 'Namaz Timings',
      image:
        'https://private-user-images.githubusercontent.com/25157365/374141379-f48ab644-71fb-4433-80d3-7c97b9bb2981.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTkwNDcsIm5iZiI6MTcyODI5ODc0NywicGF0aCI6Ii8yNTE1NzM2NS8zNzQxNDEzNzktZjQ4YWI2NDQtNzFmYi00NDMzLTgwZDMtN2M5N2I5YmIyOTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDEwNTkwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhNjNjMDUzZGM3ODYyYzhmOTQ0ZDgwNmQ0MmNiY2FiNDJlMTk4Mjk1MGEzMGY4YjRlOGJhMWI4ZDQwYTNmNWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ISlbWlfmSFTpItFyv5y2AF-hiaj2zzXgZGkM75Qft4o',
      description: 'Mosque prayer timings.',
      actions: [
        {
          label: 'View on Web',
          target: 'https://namaz-timings-d4553.web.app/',
        },
      ],
      tags: ['ReactJS', 'Material UI', 'Redux Toolkit', 'Firebase'],
    },

    {
      title: 'Image Compressor - Android',
      image:
        'https://raw.githubusercontent.com/KhanStan99/my-portfolio/master/src/asset/image_comp.png',
      description:
        'An Android application to compress images. This project also includes run time permission explained.',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/AndroidImageCompressor',
        },
      ],
      tags: ['Angular', 'Type Script', 'HTMl/CSS'],
    },
    {
      title: 'Angular Login Structure',
      image: 'https://miro.medium.com/max/3492/1*P7x-_0XfQz6CVmMY_QAv0w.png',
      description:
        'Its a basic Angular application which show how to maintain user session and route from login to home screen by notifying other components',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/Angular-Basic-Login-Structure',
        },
      ],
      tags: ['Angular', 'Type Script', 'HTMl/CSS'],
    },
    {
      title: 'Android MVVM Structure',
      image: 'https://miro.medium.com/max/960/1*kWwjlkOEyTV6M7W7tZrs1w.png',
      description:
        'Android project MVVM structure. You can use this to avoid writing boiler plate code for your new projects.',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/AndroidMVVMBaseStructure',
        },
      ],
      tags: ['Android', 'MVVM', 'Kotlin', 'XML'],
    },
    {
      title: "Gilfoyle's Bitcoin Alert Android App",
      image:
        'https://i.ytimg.com/vi/8fXKVZvHUQ8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCM52_IeT_6oexNqF4SY5pmxyKWrQ',
      description:
        'Silicon Valley fan? Then you know what i am talking about! This app alerts when your set bitcoin price changes in a funny way. Try it out 😀',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/GilfoyleAndroid',
        },
        {
          label: 'Download APK from Github',
          target:
            'https://github.com/KhanStan99/GilfoyleAndroid/blob/master/InstallMe.apk',
        },
      ],
      tags: ['Android', 'API', 'Kotlin', 'XML'],
    },
    {
      title: 'Transition Effect in Android App',
      image:
        'https://raw.githubusercontent.com/KhanStan99/SharedElementWithRetrofitResponseInRecyclerView/master/gif-image.gif',
      description: 'Basic Transition effect for your android application',
      actions: [
        {
          label: 'View on Github',
          target:
            'https://github.com/KhanStan99/SharedElementWithRetrofitResponseInRecyclerView',
        },
      ],
      tags: ['Android', 'Kotlin', 'XML'],
    },
    {
      title: 'TODO list Android App',
      image:
        'https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png',
      description:
        "TODO list appliation with CRUD operations uses 'NestJS' REST APIs.",
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/TodoMobileApp',
        },
      ],
      tags: ['Android', 'Kotlin', 'XML', 'REST', 'NodeJS'],
    },
    {
      title: 'Covid 19 Tracker (Unmanaged)',
      image:
        'https://static.wixstatic.com/media/8443ed_907b0743b641488abe35a9947646ee03~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/8443ed_907b0743b641488abe35a9947646ee03~mv2.jpg',
      description:
        'In December 2019, a novel coronavirus strain (SARS-CoV-2) emerged in the city of Wuhan, China. I created a tracking application specifically for Indian regions which shows detailed list of cases from all over India.',
      actions: [
        {
          label: 'View on Github',
          target: 'https://github.com/KhanStan99/Covid-19Tracker-ReactJS',
        },
        {
          label: 'View on Web',
          target: 'https://cv19tracker.firebaseapp.com/',
        },
      ],
      tags: ['ReactJS', 'Material UI', 'Java Script', 'HTMl/CSS'],
    },
  ];

  const openProjects = (target) => {
    window.open(target, '_blank');
  };

  return (
    <Grid2 container spacing={2} direction="row">
      {projects.map((item) => {
        return (
          <Grid2 item xs={12} sm={12} md={6} lg={3} key={item.title}>
            <Card key={item.title} className={classes.cards}>
              <CardActionArea>
                <CardMedia className={classes.media} image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                {item.actions.map((action) => {
                  return (
                    <Button
                      size="small"
                      key={action.target}
                      color="primary"
                      onClick={() => {
                        openProjects(action.target);
                      }}
                    >
                      {action.label}
                    </Button>
                  );
                })}
              </CardActions>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>
  );
}
