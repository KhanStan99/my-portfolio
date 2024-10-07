import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Box, Grid2 } from '@mui/material';
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


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
        <Grid2 item xs={12} sm={12} md={12} lg={12}>
          <TopComponent />
          <BottomComponent />
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
