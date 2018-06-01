import React from 'react'
import moment from 'moment'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class BasketTable extends React.Component {
  constructor() {
    super()
    this.state = {
      item: '',
      weight: '',
      expirationDate: '',
      expirationTime: '',
      fairMarketValue: ''
    }
  }

  //This function converts the time and data objects stored on state and
  //converts the to to milliseconds from epoch, it also constructs an items object,
  //and passes it up to the parent
  prepToAddItem() {
    let momentTime = moment(this.state.expirationTime),
        momentDate = moment(this.state.expirationDate),
        hours = this.addZeroToFrontHelper(momentTime.hours()),
        minutes = this.addZeroToFrontHelper(momentTime.minutes()),
        months = this.addZeroToFrontHelper(momentDate.month() + 1),
        days = this.addZeroToFrontHelper(momentDate.daysInMonth()),
        years = this.addZeroToFrontHelper(momentDate.year()),
        timeString = '',
        itemObj = {}

    timeString = `${years}-${months}-${days} ${hours}:${minutes}`
    itemObj = {
      item: this.state.item,
      weight: this.state.weight,
      fairMarketValue: this.state.fairMarketValue,
      utcTime: moment(timeString).format('x')
    }
    this.props.addItemToBasket(itemObj)
    this.setState({item: '', weight: '', fairMarketValue: ''})
  }

  //This function formats currency on the onChange 
  formatCurrencyHelper(input) {
    let value = new String(input);
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

  //helper function to prepToAddItem make sure everything is formatted properly
  addZeroToFrontHelper(num) {
    if(num < 10) {
      return `0${num}`
    } else {
      return `${num}`
    }
  }
  
  render() {
    return (
      <div className="BasketTable">
        <button
          onClick={() => this.props.makeBasket()}
        >Make Basket</button>
        <div>
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
          <input 
            placeholder="Item name"
            onChange={e => this.setState({item: e.target.value})}
            value={this.state.item}
            type="text"
          />
          <input 
            placeholder="Weight in pounds"
            onChange={e => this.setState({weight: e.target.value})}
            value={this.state.weight}
            type="number"
          />
          <input 
            placeholder="Fair market value"
            onChange={e => this.formatCurrencyHelper(e.target.value)}
            value={this.state.fairMarketValue}
            type="number" 
            step="0.01"
          />
        </div>
        <button
          onClick={() => this.prepToAddItem()}
        >Add Item</button>
      </div>
    );
  }
}

export default BasketTable;