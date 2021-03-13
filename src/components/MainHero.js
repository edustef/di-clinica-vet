import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: theme.spacing(1),
    fill: 'currentColor',
    [theme.breakpoints.up('md')]: {
      width: '2.4rem',
      height: '2.4rem',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainHero({ title, subtitle }) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.title} component="h1" variant="h4" color="inherit" gutterBottom>
              <Logo className={classes.logo} />
              {title}
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              {subtitle}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainHero.propTypes = {
  post: PropTypes.object,
};