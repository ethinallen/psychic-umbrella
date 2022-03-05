import React, { useState, useRef } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';

// import styles
import useStyles from "./styles";

export default function Window(props) {

  var classes = useStyles();

    return (
      <Grid container item xs={4} alignItems="center" justifyContent="center">
        <img className={classes.window} alt="" src={props.source} ></img>
      </Grid>
    );
}
