import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 48.8566, lng: 2.3522},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      { this.props.flats.map((flat) => {
        return <Marker
          lat={flat.lat}
          lng={flat.lng}
          text={flat.name}
          price={flat.price}
          selected={this.props.selectedMarker === `marker_${flat.id}`}
          markerId={`marker_${flat.id}`}
          key={`marker_${flat.id}`}
        />
      })}

      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
