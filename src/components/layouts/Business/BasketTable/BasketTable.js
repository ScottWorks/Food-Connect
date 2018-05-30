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
    var itemObj = {
      name: this.state.name,
      weight: this.state.weight,
      expirationDate: this.state.expirationDate,
      expirationTime: this.state.expirationTime
    }
    this.props.addItemToBasket(itemObj)
  }
  
  render() {
    return (
      <div className="BasketTable">
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
        <button
          onClick={() => this.prepToAddItem()}
        >Add Item</button>
      </div>
    );
  }
}

export default BasketTable;