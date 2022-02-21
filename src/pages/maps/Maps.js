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

const places = [];

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;

  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'red',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
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

  const onClick = () => {
    setShowWindow(true);
    console.log('hello');
  }

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
      <div style={markerStyle} onClick={onClick}/>
      {showWindow && <InfoWindow place={place} />}
    </>
  );
};

export default function Maps() {
  var classes = useStyles();
  const [activeWindow, setActiveWindow] = React.useState(-1);


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDM89Z40cGg2DigLdpsDcCUFF609Ux0avs" }}
          defaultCenter={center}
          defaultZoom={13}
        >
        {markerData.map((marker, index) => {
          return <Marker
            key={index}
            text={marker.description}
            lat={marker.map.lat}
            lng={marker.map.lng}
            place={marker}
          />
        })}
      </GoogleMapReact>
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
