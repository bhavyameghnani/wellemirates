import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const sections = [
  { title: 'Home', url: '#/home' },
  { title: 'Health & Mental Wellness', url: '#/health' },
  { title: 'Community Connect', url: '#/communityconnect' },
  { title: 'Sustaining Mother Earth', url: '#/communityconnect' },
  { title: 'Wall', url: '#/wall' },
  { title: 'Rewards', url: '#/rewards' },
  { title: 'My Profile', url: '#/profile' },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: '#A200FF',
    fontWeight : 600
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    //fontSize: '15'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      color: "#A200FF",
    }
  },
  logo: {
    width: '10%',
    height: '10%'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo}
          alt="logo"
          src="https://he-s3.s3.amazonaws.com/media/cache/3f/d5/3fd5e8c4485e30aa05e1f29b04d74459.png" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};