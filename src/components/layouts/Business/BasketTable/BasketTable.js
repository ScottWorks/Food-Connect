import React from 'react'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { connect } from 'react-redux'
import { toEpoch, fromEpoch } from '../../../../config/timeUtil'
import { addItemToBasket, makeBasket, saveBasket } from '../../../../ducks/businessReducer'
import './BasketTable.css'

class BasketTable extends React.Component {
  constructor() {
    super()
    this.state = {
      item: '',
      weight: '',
      fairMarketValue: '',
      expirationDate: '',
      expirationTime: ''
    }
  }

  prepToAddItem() {
    if(this.state.expirationDate && this.state.expirationTime) {
      var itemObj = {
        item: this.state.item,
        weight: this.state.weight,
        FMV: this.state.fairMarketValue,
        pick_up_time: toEpoch(this.state.expirationDate, this.state.expirationTime)
      }
      this.props.addItemToBasket(itemObj)
      this.setState({item: '', weight: '', fairMarketValue: ''})
    } else {
      alert('Please and a date and time.')
    }
  }

  formatCurrencyHelper(input) {
    let value = String(input);
    // remove all characters that aren't digit or dot
    value = value.replace(/[^0-9.]/g,'');
    // replace multiple dots with a single dot
    value = value.replace(/\.+/g,'.');
    // only allow 2 digits after a dot
    value = value.replace(/(.*\.[0-9][0-9]?).*/g,'$1');
    // replace multiple zeros with a single one
    value = value.replace(/^0+(.*)$/,'0$1');
    // remove leading zero
    value = value.replace(/^0([^.].*)$/,'$1');
    this.setState({fairMarketValue: value})
  }

  prepBasket() {
    let basketObj = {
      business_id: 1, //Change this!!!
      pick_up_time: this.props.pick_up_time,
      status: 0,
      items: JSON.stringify(this.props.items)
    }
    if(this.props.editingBasket) {
      this.props.saveBasket(this.props.currentBasketID, basketObj)
    } else {
      this.props.makeBasket(basketObj)
    }
  }
  
  render() {
    return (
      <div className="BasketTable">
        <div>
          <button
            className='save-make-basket-btn'
            onClick={() => this.prepBasket()}
          >{this.props.editingBasket ? 'Save Basket' : 'Make a Basket'}</button>
        </div>
        <div
          className="BasketTable-date-time-picker"
        >
          <DatePicker 
            onChange={(x, date) => this.setState({expirationDate: date})}
            hintText="Date"
          />
          <TimePicker
            onChange={(x, time) => this.setState({expirationTime: time})}
            hintText="Time"
          />
        </div>
        <div>
          <p>{this.props.editingBasket ? fromEpoch(this.props.pick_up_time, 'ddd, MMM Do, h:mm a') : ''}</p>
        </div>
        <div className='business-table-input-contain'>
          <input 
            className='business-table-input'
            placeholder="Item Name"
            onChange={e => this.setState({item: e.target.value})}
            value={this.state.item}
            type="text"
          />
          <input 
          className='business-table-input'
            placeholder="Weight in Pounds"
            onChange={e => this.setState({weight: e.target.value})}
            value={this.state.weight}
            type="number"
          />
          <input 
          className='business-table-input'
            placeholder="Fair Market Value"
            onChange={e => this.formatCurrencyHelper(e.target.value)}
            value={this.state.fairMarketValue}
            type="number" 
            step="0.01"
          />
        </div>
        <button
          className='add-item-btn'
          onClick={() => this.prepToAddItem()}
        >Add Item</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editingBasket: state.businessReducer.editingBasket,
    pick_up_time: state.businessReducer.pick_up_time,
    items: state.businessReducer.items,
    baskets: state.businessReducer.baskets,
    currentBasketID: state.businessReducer.currentBasketID
    //business_id: state.businessReducer.business_id, Change this!!!
  }
}

export default connect(mapStateToProps, {addItemToBasket, makeBasket, saveBasket})(BasketTable);