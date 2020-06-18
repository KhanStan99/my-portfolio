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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor sapien at tortor fermentum congue. Integer dui est, eleifend
          at sagittis vel, ullamcorper vel velit. Nam pulvinar neque eget
          malesuada vehicula. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Nunc tincidunt vitae dolor id pharetra. Nunc porttitor
          sed libero tincidunt ornare.{" "}
        </Typography>
        <Divider light className={classes.divider} />
      </Paper>
    </Grid>
  );
}
