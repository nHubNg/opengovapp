import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const defaultProps = {
  center: {
    lat: 9.2182,
    lng: 9.5179,
  },
  zoom: 8,
};

export default function Map({ location }) {
  return (
    <div className="map w-full h-full">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBVz-muk8MGUNtdO6FighiUIGcAL-HLI44" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={location[0].lat}
            lng={location[0].lng}
            // text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
