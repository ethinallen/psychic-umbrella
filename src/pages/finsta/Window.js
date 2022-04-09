import React from 'react';
import { Grid } from '@material-ui/core';
import LazyLoad from 'react-lazy-load';

// import styles
import useStyles from "./styles";

export default function Window(props) {
  var containerWidth = makeWidth();

  console.log(containerWidth);
  var classes = useStyles();

    return (
      <Grid container item xs={containerWidth} alignItems="center" justifyContent="center">
        <LazyLoad>
          <img className={classes.window} alt="" src={props.source} ></img>
        </LazyLoad>
      </Grid>
    );
}

function makeWidth() {
  var width = window.screen.availWidth;
  switch (true) {
    case (width < 500):
      console.log("yeet");
      return 6;
    case (width < 2000):
      return 4;
    case (width > 2000):
      return 3;
    default:
      return 3;
  }
}
