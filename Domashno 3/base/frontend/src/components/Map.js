import React, { Component } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 41.98, lng: 21.437802 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 41.996387, lng: 21.437802 }} />
      )}
      {props.cords.map(
        (cords) => (
          console.log(cords),
          (<Marker position={{ lat: cords[0], lng: cords[1] }} />)
        )
      )}
    </GoogleMap>
  ))
);
export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  // 41.996387, 21.437802
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        cords={this.props.cords}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}