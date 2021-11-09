import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import VideoCallIcon from '@material-ui/icons/VideoCall';
// const useStyles = makeStyles((theme) => ({}));

export default function LinksComponent() {
  // const classes = useStyles();

  const socialLinks = [
    {
      title: 'Github',
      icon: <GitHubIcon color="primary" />,
      target: 'https://github.com/KhanStan99',
    },
    {
      title: 'Twitter',
      icon: <TwitterIcon color="primary" />,
      target: 'https://twitter.com/KhanStan99',
    },
    {
      title: 'Instagram',
      icon: <InstagramIcon color="primary" />,
      target: 'https://www.instagram.com/KhanStan99/',
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIcon color="primary" />,
      target: 'https://www.linkedin.com/in/userhidayatkhan/',
    },
    {
      title: 'My Blog - Trentweet',
      icon: <LanguageIcon color="primary" />,
      target: 'https://www.trentweet.in/',
    },
  ];

  const ytLinks = [
    {
      title: 'Hidayat Khan',
      icon: <VideoCallIcon color="primary" />,
      target: 'https://www.youtube.com/channel/UCAwvnxzb2YgftWrF8Vu7FuA',
    },
    {
      title: 'SHAF (Gaming)',
      icon: <VideoCallIcon color="primary" />,
      target: 'https://www.youtube.com/c/SHAF399/videos',
    },
  ];

  const handleListItemClick = (target) => {
    window.open(target, '_blank');
  };

  return (
    <div>
      <Typography
        color="primary"
        variant="h4"
        component="h2"
        style={{ textAlign: 'start' }}
      >
        <b>Socials</b>
      </Typography>
      <List component="nav" aria-label="secondary mailbox folder">
        {socialLinks.map((item) => {
          return (
            <div key={item.target}>
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
      <Typography
        color="primary"
        variant="h4"
        component="h2"
        style={{ textAlign: 'start' }}
      >
        <b>Youtube Channel's</b>
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        {ytLinks.map((item) => {
          return (
            <div key={item.target}>
              <ListItem button onClick={() => handleListItemClick(item.target)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              <Divider />
            </div>
          );
        })}

        <div
          className="g-ytsubscribe"
          data-channelid="UCW4ThNiminAyT4pvQR_t5Eg"
          data-layout="full"
          data-count="default"
        />

        <div
          className="g-ytsubscribe"
          data-channelid="UCAwvnxzb2YgftWrF8Vu7FuA"
          data-layout="full"
          data-count="default"
        />
      </div>
    </div>
  );
}
