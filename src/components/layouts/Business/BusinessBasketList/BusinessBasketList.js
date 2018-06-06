import React from 'react'
import { connect } from 'react-redux'
import BusinessBasket from './BusinessBasket/BusinessBasket'
import BusinessItems from './BusinessItems/BusinessItems'
import '../../../../assets/styles/BusinessBasketList.css'

function BusinessBasketList(props) {

  if(props.items.length) {
    var itemCards = props.items.map((e, i) => {
      return (
        <BusinessItems 
          item={e}
          index={i}
          key={e.item + i}
        />
      )
    })
  }

  if(props.baskets.length) {
    var basketCards = props.baskets.map((e, i) => {
      return (
        <BusinessBasket
          basket={e}
          index={i}
          key={props.baskets.basket_id + `${i}`}
        />
      )
    })
  }

  return (
    <div className="BusinessBasketList">
      <div className='item-card-container'>
        {itemCards}
      </div>
      <div>
        {basketCards}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.businessReducer.items,
    baskets: state.businessReducer.baskets
  }
}

export default connect(mapStateToProps)(BusinessBasketList);