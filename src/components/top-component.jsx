import React from 'react';
import { Grid2, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
  },
}));

export default function TopComponent() {
  const classes = useStyles();

  return (
    <Grid2
      container
      spacing={2}
      padding={2}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      textAlign={'center'}
    >
      <img
        className={classes.profileImage}
        src="images/profile-pic.jpg"
        alt="user-holder"
      />

      <Typography variant="h5" color="primary" fontWeight={'bold'}>
        Hey! I'm Hidayat Ullah Khan
      </Typography>

      <Typography variant="body1">
        I am a full stack developer mostly worked on ReactJS, Vue, Angular,
        Android Native, NodeJs, MySql DB in an agile/scrum environment. In my
        free time i play and stream games.
      </Typography>

      <Typography variant="body2">
        I love coding{' '}
        <span role="img" aria-label="computer">
          💻
        </span>{' '}
        gaming{' '}
        <span role="img" aria-label="game">
          🎮
        </span>{' '}
        sports
        <span role="img" aria-label="football">
          ⚽
        </span>{' '}
        and food{' '}
        <span role="img" aria-label="food">
          🥙
        </span>
      </Typography>
    </Grid2>
  );
}
