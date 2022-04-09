import React from 'react';
import { Grid } from '@material-ui/core';
import Window from './Window'
import PageTitle from '../../components/PageTitle';
import Stories from 'react-insta-stories';
import "./Finsta.css";

const veryTemporaryFix = shuffle(['https://cd.andrewemery.io/insta/3ba814ee-f9a8-4795-b30e-b40519334e68.jpeg',
  'https://cdn.andrewemery.io/insta/62863721731__7C093110-1023-46FB-8F5A-10A1E29480B1.jpeg',
  'https://cdn.andrewemery.io/insta/A015A977-51AE-4944-809B-21C44B9FE53E.jpeg',
  'https://cdn.andrewemery.io/insta/CD5529E7-1AC7-48E3-BB94-A2D951AF32F4.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2554.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2557.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2567.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2672.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2815.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_2816.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3038.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3289.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3363.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3653.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3676.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_3713.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_4431.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_4739.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_4797.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_4896.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_4897.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5126.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5543.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5555.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5652.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5653.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5878.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5914.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5986.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5993.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_5998.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6014.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6020.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6029.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6055.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6056.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6099.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6100.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6123.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6133.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6134.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6161.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6203.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6446.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_6937.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_7037.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_7108.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_7118.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_7160.jpeg',
  'https://cdn.andrewemery.io/insta/IMG_7210.jpeg',
  'https://cdn.andrewemery.io/insta/preference3.jpeg'
])

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Finsta() {

    var windows = veryTemporaryFix.map((addr, i) =>  <Window key={i} source={addr} />);

    return (
      <>
      <PageTitle title="Fake Instagram" />
      <Grid container spacing={1}>
        {windows}
      </Grid>
      </>
    );

}

export default Finsta;
