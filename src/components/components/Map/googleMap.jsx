import React, { Component } from 'react'
// import Map from './map'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
// import SearchInput from './placesAutoComplete'
import blueIcon from '../../../assets/icons/map-blue.png'

  export class Container extends Component {
      constructor(props) {
          super(props)

          this.state = {
              showingInfoWindow: false,
              activeMarker: {},
              selectedPlace: {},
          }

        //   this.newLocation = this.newLocation.bind(this)

      }



      onMarkerClick = (props, marker, e) => {
          this.setState({
              selectedPlace: props,
              activeMarker: marker,
              showingInfoWindow: true,
          })
      }

      onMapClicked = (props) => {
          if(this.state.showingInfoWindow) {
              this.setState({
                  showingInfoWindow: false,
                  activeMarker: null
              })
          }
        }

    //   newLocation = ( latLng ) => {
    //       console.log(latLng)
    //       let newPos = {
    //           lat: Number(latLng.lat),
    //           lng: Number(latLng.lng)
    //       }
    //      this.setState({
    //          markers: [...this.state.markers, newPos],
    //          lat: '',
    //          lng: ''
    //      })
    //   }
   

      render() {
          console.log(this.props.markeers)
          const {markeers} = this.props

          const style = {
              width: '400px',
              height: '400px',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              
          }

          let displayMarkers = markeers.map( (markeer, i) => {
              return (
              <Marker 
                key={i} 
                position={{lat: markeer.latitude, lng: markeer.longitude } } 
                name={markeer.business_name}
                onClick={this.onMarkerClick}
              /> 
            )
          })

          if(!this.props.loaded) {
              return <div>Loading...</div>
          }

          return (
              <div style={style}>
                <Map
                    style={style}
                    google={this.props.google}
                    initialCenter={this.props.mapCenter}           
                    zoom={10}
                    onClick={this.onMapClicked}
                >
                    <Marker
                        name={this.props.npName}
                        onClick={this.onMarkerClick}
                         icon={{
                             url: "https://www.abracleaners.com/wp-content/uploads/2016/02/map_marker.png",
                         }}
                      />
                {/* Displays 'Marker components' from an array of coordinates. Will render from an unknown array length. */}
                {displayMarkers}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1 style={{fontWeight: '700', textDecoration: 'underline', marginBottom: '3px'}}>{this.props.npName}</h1>
                        <h4>{this.props.address}</h4>
                        <h4>{this.props.city}</h4>
                        <h4>{`You have ${this.props.scheduledBaskets} pickup(s) scheduled.`}</h4>
                    </div>
                </InfoWindow>
                </Map>
                
                
              </div>
          )
      }
  }

  export default GoogleApiWrapper({
      apiKey: process.env.REACT_APP_GMAP_API_KEY
  })(Container)