import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  topPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  profileImage: {
    borderRadius: "50%",
    width: "100px",
  },
  nameStyle: {
    color: "#fff",
  },
  divider: {
    backgroundColor: "#FFF",
    margin: "15px",
  },
}));

export default function TopComponent() {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.topPaper} elevation={0}>
        <img
          className={classes.profileImage}
          src="https://pbs.twimg.com/profile_images/1131901468833804289/l9-uR_3m_400x400.jpg"
          alt="user-holder"
        />
        <br></br>
        <Typography variant="button" className={classes.nameStyle}>
          Hidayat Ullah Khan
        </Typography>
        <Divider light className={classes.divider} />

        <Typography variant="caption" className={classes.nameStyle}>
          Hello there! I am a full stack software engineer have 3 years of IT
          experiance in various technologies. I also have interest in graphic
          designing and UI/UX development. In my free time i play and stream
          games.
        </Typography>
        <div>
          <Typography variant="caption" className={classes.nameStyle}>
            I love coding{" "}
            <span role="img" aria-label="computer">
              💻
            </span>{" "}
            gaming{" "}
            <span role="img" aria-label="game">
              🎮
            </span>{" "}
            sports
            <span role="img" aria-label="football">
              ⚽
            </span>{" "}
            and food{" "}
            <span role="img" aria-label="food">
              🥙
            </span>
          </Typography>
        </div>

        <Divider light className={classes.divider} />
      </Paper>
    </Grid>
  );
}
