import React from 'react'
import BusinessBasket from './BusinessBasket/BusinessBasket'
import BusinessItems from './BusinessItems/BusinessItems'

class BusinessBasketList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baskets: props.baskets
    }
  }
  render() {
    var itemCards = this.props.items.map((e, i) => {
      return (
        <BusinessItems 
          item={e}
          index={i}
          key={e.item + i}
        />
      )
    })

    if(this.props.baskets) {
      var basketCards = this.props.baskets.map((e, i) => {
        return (
          <BusinessBasket
            basket={e}
            index={i}
          />
        )
      })
    }
    return (
      <div classitem="BusinessBasketList">
        <div>
          {itemCards}
        </div>
        <div>
          {basketCards}
        </div>
      </div>
    );
  }
}

export default BusinessBasketList;