import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useSpring, animated as a } from 'react-spring'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    width: '320px',
    height: '180px',
    objectFit: 'cover',
    opacity: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2]
  }
}));

export default function LinkImage({ index, src, x, y }) {
  const classes = useStyles();
  const props = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    transform: `translate(${x}px, ${y}px)`
  });
  return (
    <a.img key={index} style={props} className={classes.root} src={src} alt="" />
  )
}
