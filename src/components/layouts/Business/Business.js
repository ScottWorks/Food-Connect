import React from 'react'
import axios from 'axios'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'
import Header from'../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Business.css'

class Business extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      baskets: [],
      pick_up_time: 0,
      fromBasket: false,
      currentBasketID: -1
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.editBasket = this.editBasket.bind(this)
  }

  //When component mounts get unexpired baskets that belong to this business
  componentDidMount() {
    var temp = 1
    var epochTime = (new Date).getTime()
    axios.get(`/api/basket/${temp}/${epochTime}`).then(res => {
      this.setState({baskets: res.data})
    })
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it take the item passed in an adds it to state
  // addItemToBasket(newItem) {
  //   var itemsArr = []
  //   if(this.state.items[0]) {
  //     itemsArr = [{item: newItem.item, weight: newItem.weight, FMV: newItem.fairMarketValue}, ...this.state.items]
  //     this.setState({items: itemsArr, pick_up_time: newItem.utcTime})
  //   } else {
  //     itemsArr = [{item: newItem.item, weight: newItem.weight, FMV: newItem.fairMarketValue}]
  //     this.setState({items: itemsArr, pick_up_time: newItem.utcTime})
  //   }
  // }

  deleteItem(index) {
    if(this.state.fromBasket) {
      var newItems = this.state.items
      newItems.splice(index, 1)
      this.setState({items: newItems})
    } else {

    }
  }

  editBasket(index) {
    if(!this.state.fromBasket) {
      var otherBaskets = this.state.baskets
      var selectedBasket = this.state.baskets[index]
      var basket_id = selectedBasket.basket_id
      otherBaskets.splice(index, 1)
      this.setState({
        items: selectedBasket.items, 
        pick_up_time: this.state.pick_up_time,
        fromBasket: true, 
        baskets: otherBaskets,
        currentBasketID: basket_id
      })
    }
  }

  deleteBasket(basket_id, index) {
    axios.delete(`/api/basket/${basket_id}`).then(() => {
      var newBaskets = this.state.baskets
      newBaskets.splice(index, 1)
      this.setState({baskets: newBaskets})
    })
  }


  //This Fn is passed down to BusinessTable using it's props, 
  //it is triggered by the Make Basket btn in that component
  //it send the axios request to the server making a basket 
  //with all the given items
  // makeBasket() {
  //   var basketObj = {
  //     business_id: 1,
  //     pick_up_time: this.state.pick_up_time,
  //     status: 0,
  //     items: JSON.stringify(this.state.items)
  //   }
  //   this.setState({items: []})
  //   axios.post('/api/basket', basketObj).then(res => {
  //     var basketArr = [res.data, ...basketArr]
  //     this.setState({baskets: basketArr})
  //   })
  // }

  // saveBasket() {
  //   var basketObj = {
  //     business_id: 1,
  //     pick_up_time: this.state.pick_up_time,
  //     status: 0,
  //     items: JSON.stringify(this.state.items)
  //   }
  //   this.setState({items: []})
  //   axios.put(`/api/basket/${this.state.currentBasketID}`, basketObj).then(res => {
  //     var basketArr = [res.data, ...basketArr]
  //     this.setState({baskets: basketArr, fromBasket: false, currentBasketID: -1})
  //   })
  // }

  render() {
    return (
      <div className="Business">
        <Header />
        <div className="bus-top-bar">

        </div>
        <BusinessTable 
          fromBasket={this.state.fromBasket}
        />
        <BusinessBasketList 
          items={this.state.items}
          baskets={this.state.baskets}
          deleteItem={this.deleteItem}
          editBasket={this.editBasket}
          deleteBasket={this.deleteBasket}
        />
        <Footer />
      </div>
    );
  }
}

export default Business;