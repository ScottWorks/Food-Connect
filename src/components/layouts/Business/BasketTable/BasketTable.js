import React from 'react'
import moment from 'moment'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class BasketTable extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      weight: '',
      expirationDate: '',
      expirationTime: ''
    }
  }

  prepToAddItem() {
    let momentTime = moment(this.state.expirationTime),
        momentDate = moment(this.state.expirationDate),
        hours = this.addZeroToFrontHelper(momentTime.hours()),
        minutes = this.addZeroToFrontHelper(momentTime.minutes()),
        months = this.addZeroToFrontHelper(momentTime.months()),
        days = this.addZeroToFrontHelper(momentTime.days()),
        years = this.addZeroToFrontHelper(momentTime.years()),
        timeString = '',
        parts = '',
        utcTime = 0,
        itemObj = {}

    timeString = `${months}/${days}/${years} ${hours}:${minutes}`
    parts = timeString.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/);
    utcTime = Date.UTC(+parts[3], parts[2]-1, +parts[1], +parts[4], +parts[5]);
    itemObj = {
      name: this.state.name,
      weight: this.state.weight,
      utcTime: utcTime
    }
    this.props.addItemToBasket(itemObj)
    this.setState({name: '', weight: ''})
  }

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
        >
          Make Basket
        </button>
        <div>
          <input 
            placeholder="Item name"
            onChange={e => this.setState({name: e.target.value})}
            value={this.state.name}
          />
          <input 
            placeholder="Weight in pounds"
            onChange={e => this.setState({weight: e.target.value})}
            value={this.state.weight}
          />
          <DatePicker 
            onChange={(x, date) => this.setState({expirationDate: date})}
            hintText="Portrait Dialog"
          />
          <TimePicker
            onChange={(x, time) => this.setState({expirationTime: time})}
            hintText="12hr Format"
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