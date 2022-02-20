import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '0px',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%'
  },
  nameStyle: {
    color: '#fff',
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
        <Grid style={{ display: 'flex' }}>
          <img
            className={classes.profileImage}
            src="https://raw.githubusercontent.com/KhanStan99/my-portfolio/master/src/asset/dp.jpg"
            alt="user-holder"
          />
          <Grid style={{ marginLeft: '10px' }}>
            <Typography variant="button" className={classes.nameStyle}>
              Hidayat Ullah Khan
            </Typography>
            {/* <Divider light className={classes.divider} /> */}
            <br />
            <Typography variant="caption" className={classes.nameStyle}>
              3+ Years solid experiance as a full stack developer in
              technologies like ReactJS, Angular, VueJs, Android Native, NodeJs,
              MySql DB working in an agile/scrum environment. In my free time i
              play and stream games.
            </Typography>
            <div>
              <Typography variant="caption" className={classes.nameStyle}>
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
