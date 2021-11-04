import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import React from 'react';
import Box from '@material-ui/core/Box';
import TopComponent from './components/top-component';
import BottomComponent from './components/bottom-component';
import './index.css';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#e57373',
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} sm={12} md={7} lg={3}>
          <TopComponent />
          <BottomComponent />
        </Grid>
        <Grid
          item
          style={{
            background: 'linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)',
          }}
          xs={false}
          sm={false}
          md={5}
          lg={9}
        ></Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
