import React, {Component} from 'react'
import PlacesAutoComplete, {geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios'

import '../../../components/auth/Registration/registration.css'
class SearchInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: '',
            results: [],
            formatted_address: ''
        }
    }

    handleChange = (address) => {
        this.setState({
            address
        })
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
        .then( results => {
            // set google address data to local state, & send the address data up to the parent register function
            this.setState({results: results[0]})
            this.props.getAddress(results[0].formatted_address)
        })
        .then( latLng => console.log('Success', latLng))
        .catch( error =>  console.log('Error', error))

    }

    render() {
        console.log(this.state.results.formatted_address)
        return(
            <PlacesAutoComplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                debounce={500}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                    <input 
                        style={{
                            width: '90%',
                            marginBottom: '10px',
                            padding: '5px',
                            fontSize: '1em',
                            paddingLeft: '8px'
                        }}

                        {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                      })}
                    />
                    <div className='autocomplete-dropdown-container'>
                      {suggestions.map(suggestion => {
                        
                          const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item';
                        const style = suggestion.active
                                    ? {backgroundColor: '#fafafa', cursor: 'pointer', width: '92%'}
                                    : {backgroundColor: '#ffffff', cursor: 'pointer', width: '92%'};
                        return (
                            <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                <span>{suggestion.description}</span>
                            </div>
                        )
                      })}
                    </div>
                </div>
            )}
            </PlacesAutoComplete>
        );
    }
}

export default SearchInput