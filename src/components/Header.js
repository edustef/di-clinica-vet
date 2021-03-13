import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Alert } from '@material-ui/lab';
import useWindowDimensions from './utils/useWindowDimensions';
import LinkImage from './LinkImage';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '2rem',
    height: '2rem',
    marginRight: theme.spacing(1)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline'
    }
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    zIndex: 10,
    padding: theme.spacing(1),
    flexShrink: 0,
    '&:hover': {
      opacity: 1
    }
  },
  linkImage: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    width: '320px',
    height: '180px',
    objectFit: 'cover',
    opacity: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2]
  },
}));

export default function Header({ pages, title, alertMessage }) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const { width: windowWidth } = useWindowDimensions();

  const handleLinkEnter = (e, i) => {
    const { bottom, left } = e.target.getBoundingClientRect();
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    setImagePos({
      x: clamp(0, left - 320, windowWidth),
      y: bottom
    });
    setActiveIndex(i);
  }

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.toolbarTitle}
          component="h2"
          variant="h5"
          noWrap
        >
          <Link className={classes.toolbarTitle} color="inherit" href="/">
            <Logo className={classes.logo} />
            <span className={classes.title}>{title}</span>
          </Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      {alertMessage &&
        <Alert severity="info">
          {alertMessage}
        </Alert>
      }
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {pages.map((page, index) => (
          <Link
            key={page.title}
            onMouseEnter={(e) => handleLinkEnter(e, index)}
            onMouseLeave={() => setActiveIndex(-1)}
            color="inherit"
            noWrap
            variant="body2"
            href={page.url}
            className={classes.toolbarLink}
          >
            {page.title}
          </Link>
        ))}
      </Toolbar>
      {pages.map(({ image }, index) => {
        if (activeIndex !== index) return null;
        return (
          <LinkImage key={index} src={image} x={imagePos.x} y={imagePos.y} index={index} />
        )
      })}
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};