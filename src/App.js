import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Divider from "@material-ui/core/Divider";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#e57373",
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  bottomPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3} direction="column" alignItems="stretch">
          <Grid item md={6}>
            <Paper className={classes.topPaper}>
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
              <Typography variant="button" className={classes.nameStyle}>
                BIO
              </Typography>
              <br></br>
              <Typography variant="caption" className={classes.nameStyle}>
                I am a professional
              </Typography>
              <Divider light className={classes.divider} />
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper className={classes.bottomPaper}>BOTTOM</Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
