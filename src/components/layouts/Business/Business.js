import React from 'react'
import axios from 'axios'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'

class Business extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      expirationTimeStamp: ''
    }
  }

  componentDidMount() {
    // axios.get(`/api/basket/${businessID}`).then(res => {
    //   this.setState({baskets: res.data})
    // })
  }

  addItemToBasket(item) {
    var items = [{name: item.name, weight: item.weight}, ...items]
    this.setState({items, expirationTimeStamp: item.expirationTime + ' ' + item.expirationDate})
  }

  render() {
    return (
      <div className="Business">
        Business
        <BusinessTable 
          addItemToBasket={this.addItemToBasket}
        />
        <BusinessBasketList />
      </div>
    );
  }
}

export default Business;