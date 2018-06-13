import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import blueIcon from '../../../assets/icons/map-blue.png';

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { markeers } = this.props;

    const style = {
      width: '400px',
      height: '400px',
      boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto'
    };

    let displayMarkers = markeers.map((markeer, i) => {
      return (
        <Marker
          key={i}
          position={{ lat: markeer.latitude, lng: markeer.longitude }}
          name={markeer.company_name}
          city={`${markeer.city} ${markeer.state}`}
          address={markeer.street_address}
          onClick={this.onMarkerClick}
        />
      );
    });

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div style={style}>
        <Map
          style={style}
          google={this.props.google}
          initialCenter={this.props.mapCenter}
          zoom={10}
          // onClick={this.onMapClicked}
        >
          <Marker
            name={this.props.npName}
            address={this.props.address}
            city={this.props.city}
            onClick={this.onMarkerClick}
            icon={{
              url:
                'https://www.abracleaners.com/wp-content/uploads/2016/02/map_marker.png'
            }}
          />
          {/* Displays 'Marker components' from an array of coordinates. Will render from an unknown array length. */}
          {displayMarkers}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1
                style={{
                  fontWeight: '700',
                  textDecoration: 'underline',
                  marginBottom: '3px'
                }}
              >
                {this.state.activeMarker.name}
              </h1>
              <h4>{this.state.activeMarker.address}</h4>
              <h4>{this.state.activeMarker.city}</h4>
              <h4>There are items available for pickup!</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEoRtGius5LZiL4AX3JhFZTuhg8sZRXSI'
})(Container);
