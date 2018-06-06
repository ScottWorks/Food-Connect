import React from 'react'
import { connect } from 'react-redux'
import { deleteBasket, editBasket } from '../../../../../ducks/businessReducer'
import { fromEpoch } from '../../../../../config/timeUtil'
import './BusinessBasket.css'

function BusinessBasket(props) {

  if(props.basket && props.basket.items) {
    var items = props.basket.items.map((e, i)=> {
      return (
        <div 
          className="bus-basket-item"
          key={e.item + i}
        >
          <p>Item:</p>
          <p>{e.item}</p>
          <p>Weight:</p>
          <p>{e.weight}</p>
          <p>Fair Market Value:</p>
          <p>{e.FMV}</p>
        </div>
      )
    })
  }

  if(props.basket) {
    var checkStatus = ''
    switch(props.basket.status) {
      case 0:
        checkStatus = 'Pending' 
        break;

      case 1:
        checkStatus = 'Completed'
        break;

      case 2:
        checkStatus = 'Scheduled'
        break;

      case 3:
        checkStatus = 'Expired'
        break;

      case 4:
        checkStatus = 'No Pickup'
        break;
      
      default:
        checkStatus = ''
    }
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
        <p>{props.basket ? checkStatus : ''}</p>
        <p>{props.basket ? fromEpoch(props.basket.pick_up_time, 'ddd, MMM Do, h:mm a') : ''}</p>
        {items}
      </div>
    </div>
  );
}

export default connect(null, {deleteBasket, editBasket})(BusinessBasket);