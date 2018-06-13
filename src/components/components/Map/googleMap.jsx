import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import blueIcon from '../../../assets/icons/map-blue.png';
import MapsTransferWithinAStation from 'material-ui/SvgIcon';

export class Container extends Component {
  constructor(props) {
    super(props);
MapsTransferWithinAStation
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      pointDistance: null
    };
    this.calculateDistance = this.calculateDistance.bind(this)
  }

  // Function to calculate distance between points on the map.
  calculateDistance(lat1, lon1, lat2, lon2){

    let deg2rad = (deg) => { return deg * (Math.PI/180)}
    
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = (R * c) / 1.7; // Distance in km
    let distance = d.toFixed(2);
    
    this.setState({
      pointDistance: distance
    })
  }

  onMarkerClick = (props, marker, e) => {
  
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
  }, () => this.calculateDistance(this.props.mapCenter.lat, this.props.mapCenter.lng, 
    this.state.selectedPlace.position.lat, 
    this.state.selectedPlace.position.lng));
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
    console.log(this.state.pointDistance)
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
            position={{lat: this.props.mapCenter.lat , lng: this.props.mapCenter.lng}}
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
              {
                (!this.state.pointDistance)
                ?
                <h4>These are not the droids you are looking for</h4>
                :
                <h4>{`${this.state.pointDistance} m`}</h4>
              }
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
