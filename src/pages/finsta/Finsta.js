import React, { useState, useRef } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Window from './Window'
import PageTitle from '../../components/PageTitle';

// import styles
import useStyles from "./styles";

export default function Finsta() {

  var classes = useStyles();

    return (
      <>
        <PageTitle title="Fake Instagram" />

        <Grid container spacing={1}>
          <Window source="https://cdn.andrewemery.io/insta/IMG_2554.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_2557.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_2567.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_4797.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_4896.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6014.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6020.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_5126.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6029.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_5543.jpeg" />
        </Grid>
      </>
    );
}
