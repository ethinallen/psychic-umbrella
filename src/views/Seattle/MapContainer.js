import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import markerData from "../../../src/data/data.json";

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
      return <div>fancy seeing you here :o</div>;
    }

    const markers = markerData.map(marker => {
      return <Marker
        name={marker.title}
        onClick={this.onMarkerClick}
        position={marker.map}
        description={marker.description}
      />
    })

    return (
      <div
        style={{
          position: "relative",
          height: "100vh"
        }}
      >
      <div>

      </div>
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={15}
        initialCenter={{
          lat: 47.650661583594946,
          lng: -122.34996448988886
        }}>
          {markers}
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h2>{this.state.selectedPlace.description}</h2>
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
