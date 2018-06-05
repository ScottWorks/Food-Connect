import React, { Component } from 'react'
// import Map from './map'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
// import SearchInput from './placesAutoComplete'

  export class Container extends Component {
      constructor(props) {
          super(props)

          this.state = {
              showingInfoWindow: false,
              activeMarker: {},
              selectedPlace: {},
              initialPosition: { lat: 40.2262, lng: -111.6609 },
              markers:[]
          }

          this.newLocation = this.newLocation.bind(this)

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

      newLocation = ( latLng ) => {
          console.log(latLng)
          let newPos = {
              lat: Number(latLng.lat),
              lng: Number(latLng.lng)
          }
         this.setState({
             markers: [...this.state.markers, newPos],
             lat: '',
             lng: ''
         })
      }
   

      render() {
          console.log(this.state)
          const {markers} = this.state

          const style = {
              width: '300px',
              height: '300px',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
              marginLeft: '0px',
              marginTop: '70px'
          }

          let displayMarkers = markers.map( (marker, i) => {
              return (
              <Marker key={i} 
                position={{lat: marker.lat, lng: marker.lng } } 
                name={marker.name}
                onClick={this.onMarkerClick}
              /> 
            )
          })

          if(!this.props.loaded) {
              return <div>Loading...</div>
          }

          return (
              <div style={{style}}>
                <Map
                    style={style}
                    google={this.props.google}
                    initialCenter={this.state.initialPosition}           
                    zoom={14}
                    onClick={this.onMapClicked}
                >

                {/* <div style={{
                    zIndex:'5',
                    position: 'absolute',
                    left: '45%'
                }}>
                    {/* <SearchInput 
                        newLocation={this.newLocation}
                    /> 
                    </div> */}
                
                {/* Default marker... displays at the center of our map when rendered */}
                <Marker 
                    name={'DevMountain'}
                    desc={'THE place to learn and grow as a Developer!'}
                    url={'https://devmountain.com/'}
                    position= {{ lat: 40.2262, lng: -111.6609 }}
                    onClick={this.onMarkerClick}
                />

                {/* Displays 'Marker components' from an array of coordinates. Will render from an unknown array length. */}
                {/* {displayMarkers} */}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        <h4>{this.state.selectedPlace.desc}</h4>
                        <a href={this.state.selectedPlace.url}><h5>Click here for more information.</h5></a>
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