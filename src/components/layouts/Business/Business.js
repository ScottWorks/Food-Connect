import React from 'react'
import axios from 'axios'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'

class Business extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      baskets: [],
      pick_up_time: 0
    }
    this.addItemToBasket = this.addItemToBasket.bind(this)
    this.makeBasket = this.makeBasket.bind(this)
  }

  //When component mounts get unexpired baskets that belong to this business
  componentDidMount() {
    var temp = 10
    var epochTime = (new Date).getTime()
    axios.get(`/api/basket/${temp}/${epochTime}`).then(res => {
      this.setState({baskets: res.data})
    })
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it take the item passed in an adds it to state
  addItemToBasket(newItem) {
    var itemsArr = []
    console.log(newItem.fairMarketValue)
    if(this.state.items[0]) {
      itemsArr = [{item: newItem.item, weight: newItem.weight, FMV: newItem.fairMarketValue}, ...this.state.items]
      this.setState({items: itemsArr, pick_up_time: newItem.utcTime})
    } else {
      itemsArr = [{item: newItem.item, weight: newItem.weight, FMV: newItem.fairMarketValue}]
      this.setState({items: itemsArr, pick_up_time: newItem.utcTime})
    }
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it is triggered by the Make Basket btn in that component
  //it send the axios request to the server making a basket 
  //with all the given items
  makeBasket() {
    var basketObj = {
      business_id: 10,
      pick_up_time: this.state.pick_up_time,
      status: 0,
      items: JSON.stringify(this.state.items)
    }
    this.setState({items: []})
    axios.post('/api/basket', basketObj).then(res => {
      var basketArr = [res.data, ...basketArr]
      this.setState({baskets: basketArr})
    })
  }

  render() {
    return (
      <div className="Business">
        <div>

        </div>
        <BusinessTable 
          addItemToBasket={this.addItemToBasket}
          makeBasket={this.makeBasket}
        />
        <BusinessBasketList 
          items={this.state.items}
          baskets={this.state.baskets}
        />
      </div>
    );
  }
}

export default Business;