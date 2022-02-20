import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(90deg, #3f51b5 30%, #42a5f5 90%)',
    borderRadius: '0px',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
  },
  nameStyle: {
    color: '#fff',
    fontFamily: 'Roboto'
  },
  divider: {
    backgroundColor: '#FFF',
    margin: '15px',
  },
}));

export default function TopComponent() {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.topPaper} elevation={0}>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            className={classes.profileImage}
            src="https://raw.githubusercontent.com/KhanStan99/my-portfolio/master/src/asset/profile_pic.jpg"
            alt="user-holder"
          />
          <Grid
            style={{
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Typography variant="h1" style={{fontSize: '22px'}} className={classes.nameStyle}>
              Hey! I'm Hidayat Ullah Khan
            </Typography>
            
            <br />
            <Typography variant="caption" style={{fontSize: '16px'}} className={classes.nameStyle}>
              4+ Years solid experiance as a full stack developer in
              technologies like ReactJS, Angular, VueJs, Android Native, NodeJs,
              MySql DB working in an agile/scrum environment. In my free time i
              play and stream games.
            </Typography>
            <div>
              <Typography style={{fontSize: '16px'}} variant="caption" className={classes.nameStyle}>
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
            </div>
          </Grid>
        </Grid>

        {/* <Divider light className={classes.divider} /> */}
      </Paper>
    </Grid>
  );
}
