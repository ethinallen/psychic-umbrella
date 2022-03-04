import React, { useState, useRef } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';

// import styles
import useStyles from "./styles";

export default function Finsta() {

  var classes = useStyles();

    return (
      <>
        <PageTitle title="Fake Instagram" />

        <Grid container spacing={.5}>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_2554.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
          <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_2557.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_2567.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_4797.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_4896.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_6014.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_6020.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_5126.jpeg" ></img>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.window} alt="" src="https://cdn.andrewemery.io/insta/IMG_6029.jpeg" ></img>
          </Grid>
        </Grid>
      </>
    );
}
