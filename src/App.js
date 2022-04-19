import Grid from '@mui/material/Grid';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Box from '@mui/material/Box';
import TopComponent from './components/top-component';
import BottomComponent from './components/bottom-component';
import './index.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: ['Noto Sans'],
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TopComponent />
          <BottomComponent />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
