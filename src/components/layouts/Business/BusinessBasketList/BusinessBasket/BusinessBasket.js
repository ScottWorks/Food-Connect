import React from 'react'
import { connect } from 'react-redux'
import { deleteBasket, editBasket } from '../../../../../ducks/businessReducer'
import './BusinessBasket.css'

function BusinessBasket(props) {
  if(props.basket && props.basket.items) {
    var items = props.basket.items.map((e, i) => {
      return (
        <div className="bus-basket-item">
          <p>{e.item}</p>
          <p>{e.weight}</p>
          <p>{e.FMV}</p>
        </div>
      )
    })
  }
  return (
    <div className="BusinessBasket">
      <button
        onClick={() => props.editBasket(props.index)}
      >Edit</button>
      <button
        onClick={() => props.deleteBasket({index: props.index, id: props.basket.basket_id})}
      >Delete</button>
      <div>
        {items}
      </div>
    </div>
  );
}

export default connect(null, {deleteBasket, editBasket})(BusinessBasket);