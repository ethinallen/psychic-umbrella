import React from 'react';
import { Grid } from '@material-ui/core';
import Window from './Window'
import PageTitle from '../../components/PageTitle';
import Stories from 'react-insta-stories';
import "./Finsta.css";

// const veryTemporaryFix = shuffle([
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_2557.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_2557.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_4896.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_4896.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_6014.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_6014.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_6020.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_6020.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_4797.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_4797.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_2567.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_2567.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_5543.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_5543.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_5993.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_5993.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_5126.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_5126.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_6029.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_6029.jpeg'
//   },
//   {
//     original : 'https://cdn.andrewemery.io/insta/IMG_2554.jpeg',
//     thumbnail : 'https://cdn.andrewemery.io/insta/IMG_2554.jpeg'
//   }]
// )

const veryTemporaryFix = shuffle([
  // 'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
  {
      url:   'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
      duration: 5000,
      header: {
        heading: 'Weiner Eater',
        subheading: 'Posted 30m ago',
        profileImage:   'https://cdn.andrewemery.io/insta/IMG_5054.jpeg',
      }},
  // 'https://cdn.andrewemery.io/insta/IMG_2557.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_4896.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_6014.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_6020.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_4797.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_2567.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_5543.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_5993.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_5126.jpeg',
  // 'https://cdn.andrewemery.io/insta/IMG_6029.jpeg',
  {
  		url: 'https://cdn.andrewemery.io/insta/IMG_2554.jpeg',
  		duration: 5000,
  		header: {
  			heading: 'Weiner Eater',
  			subheading: 'Posted 30m ago',
  			profileImage: 'https://cdn.andrewemery.io/insta/IMG_2554.jpeg',
  		}
  }
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

    // var windows = veryTemporaryFix.map((addr, i) =>  <Window key={i} source={addr} />);

    return (
      <>
        <PageTitle title="Fake Instagram" />
        <Stories
    			stories={veryTemporaryFix}
    			defaultInterval={1500}
          width={1000}
    			height={1000}
    		/>
      </>
    );

}

export default Finsta;
