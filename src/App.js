import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import React from "react";
import TopComponent from "./components/top-component";
import BottomComponent from "./components/bottom-component";
import "./index.css";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#e57373",
    },
  },
  typography: {
    fontFamily: "Comfortaa",
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container direction="column" alignItems="stretch">
          <TopComponent />
          <BottomComponent />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
