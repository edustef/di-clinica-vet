import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  post: {
    maxWidth: '500px',
    marginTop: theme.spacing(2)
  },
  img: {
    width: '320px',
    height: '480px',
    objectFit: 'cover'
  }
}));

export default function Main({ posts, title }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div className={classes.post} key={post.title}>
          <Typography variant="h5" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">
            {post.description}
          </Typography>
          <img className={classes.img} src={post.image} alt={post.title} />
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};