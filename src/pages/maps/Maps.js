import React from "react";
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

// import Marker from '../../components/Marker/Marker';
import markerData from "./data.json";

// styles
import useStyles from "./styles";
const lat = parseFloat(47.650661583594946);
const lng = parseFloat(-122.34996448988886);

const center = {lat, lng};

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;

  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'black',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16, color: "white" }}>
        {place.title}
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'orange' }}>
          {place.description}
        </span>
      </div>

    </div>
  );
};

// Marker component
const Marker = ({ place }) => {
  const [showWindow, setShowWindow] = React.useState(false);

  const markerStyle = {
    border: '1px solid black',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: 'red',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <>
      <div style={markerStyle} />
      <InfoWindow place={place} />
    </>
  );
};

export default function Maps() {
  var classes = useStyles();

  const markers = markerData.map((marker, index) => {
    return <Marker
      key={index}
      text={marker.description}
      lat={marker.map.lat}
      lng={marker.map.lng}
      place={marker}
    />
  })

  const [activeWindow, setActiveWindow] = React.useState(-1);

  const onChildClick = (key, childProps) => {

    console.log(childProps);
    setActiveWindow(key);
  }


  return (
    <div className={classes.mapContainer}>
      <iframe title="let diddle" src="https://www.google.com/maps/d/u/0/embed?mid=1-RfKDlXoUl1vUwOuPE8nTLPsKyYfOAST&ehbc=2E312F" width="100%" height="100%"></iframe>
    </div>
  );
}

InfoWindow.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    price_level: PropTypes.number,
    opening_hours: PropTypes.shape({
      open_now: PropTypes.bool,
    }),
  }).isRequired,
};

Marker.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    price_level: PropTypes.number,
    opening_hours: PropTypes.shape({
      open_now: PropTypes.bool,
    }),
  }).isRequired,
};
