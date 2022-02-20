import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProjectsComponent from "./projects-component";
import LinksComponent from "./links-component";

const useStyles = makeStyles((theme) => ({
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
}));

export default function BottomComponent(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(
    window.location.pathname === "/links" ? 1 : 0
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item>
      <Paper className={classes.bottomPaper} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="simple tabs example"
        >
          <Tab label="Projects" />
          <Tab label="Links" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <ProjectsComponent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LinksComponent />
        </TabPanel>
      </Paper>
    </Grid>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
