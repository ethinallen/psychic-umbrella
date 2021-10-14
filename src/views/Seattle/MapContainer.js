import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import locations from './Pins';

console.log(locations);

locations.map(((cloud, index) => console.log(cloud)))


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (




      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}
      >
      <div>

      </div>
        <Map style={{}}
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={13}
          initialCenter={{
            lat: 47.650661583594946,
            lng: -122.34996448988886
          }}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>

            <Marker
    name={'Center of the Universe'}
    onClick={this.onMarkerClick}
    position={{lat: 47.650661583594946, lng: -122.34996448988886}}
   />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div>
        <h1>{"SOY BOY CUCK LOL"}</h1>
        <h1>{"SOY BOY CUCK LOL"}</h1>
        <h1>{"SOY BOY CUCK LOL"}</h1>
        <h1>{"SOY BOY CUCK LOL"}</h1>
        </div>
      </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
  v: "3.30"
})(MapContainer);
