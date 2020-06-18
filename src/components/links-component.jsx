import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

// const useStyles = makeStyles((theme) => ({}));

export default function LinksComponent() {
  // const classes = useStyles();

  const socialLinks = [
    {
      title: "Github",
      icon: <GitHubIcon color="primary" />,
      target: "http://www.github.com",
    },
    {
      title: "Twitter",
      icon: <TwitterIcon color="primary" />,
      target: "http://www.Twitter.com",
    },
    {
      title: "Insta",
      icon: <InstagramIcon color="primary" />,
      target: "http://www.Instagram.com",
    },
  ];

  const handleListItemClick = (target) => {
    window.open(target, "_blank");
  };

  return (
    <List component="nav" aria-label="secondary mailbox folder">
      {socialLinks.map((item) => {
        return (
          <div>
            <ListItem
              button
              onClick={(event) => handleListItemClick(item.target)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
}
