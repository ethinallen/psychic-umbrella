import React, { useState, useRef } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';

// import styles
import useStyles from "./styles";

export default function Window(props) {
  var containerWidth = makeWidth();

  console.log(containerWidth);
  var classes = useStyles();

    return (
      <Grid container item xs={containerWidth} alignItems="center" justifyContent="center">
        <img className={classes.window} alt="" src={props.source} ></img>
      </Grid>
    );
}


function makeWidth() {
  var width = window.screen.availWidth;
  console.log(width);
  switch (true) {
    case (width < 500):
      console.log("yeet");
      return 6;
      break;
    case (width < 2000):
      return 4;
      break;
    case (width > 2000):
      return 3;
      break;
    default:
      return 3;
      break;
  }
}
