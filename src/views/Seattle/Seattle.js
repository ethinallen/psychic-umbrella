import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer'
import './Seattle.css'



class Seattle extends Component {
  render() {
    return (
      <MapContainer />
    );
  }
}

export default Seattle;
