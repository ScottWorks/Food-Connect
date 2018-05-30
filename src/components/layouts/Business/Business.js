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

  componentDidMount() {
    var temp = 1

    axios.get(`/api/basket/${temp}`).then(res => {
      this.setState({baskets: res.data})
    })
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it take the item passed in an adds it to state
  addItemToBasket(item) {
    var itemsArr = []
    if(this.state.items[0]) {
      itemsArr = [{name: item.name, weight: item.weight}, ...this.state.items]
      this.setState({items: itemsArr, pick_up_time: item.utcTime})
    } else {
      itemsArr = [{name: item.name, weight: item.weight}]
      this.setState({items: itemsArr, pick_up_time: item.utcTime})
    }
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it is triggered by the Make Basket btn in that component
  //it send the axios request to the server making a basket 
  //with all the given items
  makeBasket() {
    var basketObj = {
      items: this.state.items,
      expiration: this.state.pick_up_time,
      business_id: '111111111111111111111111 NEED TO CHANGE THIS 11111111111111111111111111111'
    }
    axios.post('/api/basket', basketObj).then(res => {
      var basketArr = [res.data, ...basketArr]
      this.setState({baskets: basketArr})
    })
  }

  render() {
    let itemCards = this.state.items.map((e, i) => {
      return (
        <div>
          <p>{e.name}</p>
          <p>{e.weight}</p>
        </div>
      )
    })
    return (
      <div className="Business">
        Business
        <BusinessTable 
          addItemToBasket={this.addItemToBasket}
          makeBasket={this.makeBasket}
        />
        {itemCards}
        <BusinessBasketList />
        <h1>{this.state.baskets}</h1>
      </div>
    );
  }
}

export default Business;