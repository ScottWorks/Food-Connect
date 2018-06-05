import React, {Component} from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import {geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SearchInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: ''
        }
    }

    handleChange = (address) => {
        this.setState({
            address
        })
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
        .then( results => getLatLng(results[0]))
        .then( latLng => this.props.newLocation(latLng))
        .catch( error =>  console.log('Error', error))
    }

    render() {
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
                        {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                      })}
                    />
                    <div className='autocomplete-dropdown-container'>
                      {suggestions.map(suggestion => {
                          const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item';
                        const style = suggestion.active
                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                    : {backgroundColor: '#ffffff', cursor: 'pointer'};
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