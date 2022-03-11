import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Window from './Window'
import PageTitle from '../../components/PageTitle';
import { API, graphqlOperation } from 'aws-amplify';
import GetUser from "../../graphql/queries"
import { graphql } from "react-apollo";


const getUserProfile = async () => {
    const response = await API.graphql(graphqlOperation(GetUser));
    return shuffle(response.data.getProfile.addrs);
};

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

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

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {

        getUserProfile().then(
          result => setApiResponse(result));
    },[]);

    console.log(apiResponse);

    var windows = apiResponse.map((addr, i) =>  <Window key={addr} source={addr} />);

    return (
      <>
        <PageTitle title="Fake Instagram" />
        <Grid container spacing={2}>
          {windows}
        </Grid>
      </>
    );

}

export default Finsta;

/*          <Window source="https://cdn.andrewemery.io/insta/IMG_2554.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_2557.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_2567.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_4797.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_4896.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6014.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6020.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_5126.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_6029.jpeg" />
          <Window source="https://cdn.andrewemery.io/insta/IMG_5543.jpeg" />
          */
