import React from 'react';
import { Grid } from '@material-ui/core';
import {trackWindowScroll} from 'react-lazy-load-image-component';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// import styles
import useStyles from "./styles";

function Window(props) {
  var containerWidth = makeWidth();

  console.log(containerWidth);
  var classes = useStyles();

    return (
      <Grid container item xs={containerWidth} alignItems="center" justifyContent="center">
        <LazyLoadImage
          alt={"useful alt"}
          width={"100%"}
          src={props.source}
          afterLoad={yeet}
        />
      </Grid>
    );
}

function yeet() {
  console.log('yeeet');
}

function makeWidth() {
  var width = window.screen.availWidth;
  switch (true) {
    case (width < 500):
      return 6;
    case (width < 2000):
      return 4;
    case (width > 2000):
      return 3;
    default:
      return 3;
  }
}

export default trackWindowScroll(Window);
