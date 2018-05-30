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
      expirationTimeStamp: ''
    }
  }

  componentDidMount() {
    // axios.get(`/api/basket/${businessID}`).then(res => {
    //   this.setState({baskets: res.data})
    // })
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it take the item passed in an adds it to state
  addItemToBasket(item) {
    var items = [{name: item.name, weight: item.weight}, ...items]
    this.setState({items, expirationTimeStamp: item.expirationTime + ' ' + item.expirationDate})
  }

  //This Fn is passed down to BusinessTable using it's props, 
  //it is triggered by the Make Basket btn in that component
  //it send the axios request to the server making a basket 
  //with all the given items
  makeBasket() {
    var basketObj = {
      items: this.state.items
      
      //experation time 

    }
    axios.post('/api/basket', basketObj).then(res => {

    })
  }

  render() {
    return (
      <div className="Business">
        Business
        <BusinessTable 
          addItemToBasket={this.addItemToBasket}
          makeBasket={this.makeBasket}
        />
        <BusinessBasketList />
      </div>
    );
  }
}

export default Business;