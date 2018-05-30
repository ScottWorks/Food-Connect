import React from 'react'
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
    var timeString = this.state.expirationDate + this.state.expirationTime
    var parts = timeString.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/);
    var utcTime = Date.UTC(+parts[3], parts[2]-1, +parts[1], +parts[4], +parts[5]);
    var itemObj = {
      name: this.state.name,
      weight: this.state.weight,
      utcTime: itemObj
    }
    this.props.addItemToBasket(itemObj)
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
          />
          <input 
            placeholder="Weight in pounds"
            onChange={e => this.setState({weight: e.target.value})}
          />
          <DatePicker 
            onChange={(x, date) => this.setState({expirationDate: date})}
            hintText="Portrait Dialog"
          />
          <TimePicker
            onChange={(x, time) => this.setState({expirationDate: time})}
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