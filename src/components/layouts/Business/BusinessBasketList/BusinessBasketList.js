import React from 'react'
import BusinessBasket from './BusinessBasket/BusinessBasket'
import BusinessItems from './BusinessItems/BusinessItems'

class BusinessBasketList extends React.Component {
  render() {
    var itemCards = this.props.items.map((e, i) => {
      return (
        <BusinessItems 
          item={e}
          index={i}
          key={e.item + i}
          deleteItem={this.props.deleteItem}
        />
      )
    })

    if(this.props.baskets) {
      var basketCards = this.props.baskets.map((e, i) => {
        return (
          <BusinessBasket
            basket={e}
            index={i}
            editBasket={this.props.editBasket}
            deleteBasket={this.props.deleteBasket}
          />
        )
      })
    }
    return (
      <div className="BusinessBasketList">
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