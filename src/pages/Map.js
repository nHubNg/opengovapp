import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// const mapStyles = {
//   width: '60%',
//   height: '100%'
// };
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 9.058345, lng: 9.682629 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.5524695, longitude: -122.0425407 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        // style={mapStyles}
        initialCenter={{ lat: 9.058345, lng: 9.682629 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVz-muk8MGUNtdO6FighiUIGcAL-HLI44",
})(MapContainer);
