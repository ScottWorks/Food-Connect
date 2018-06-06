import React from 'react'
import { connect } from 'react-redux'
import { deleteBasket, editBasket } from '../../../../../ducks/businessReducer'
import { fromEpoch } from '../../../../../config/timeUtil'
import './BusinessBasket.css';
import * as utilFunc from '../../../../../config/analyticsUtil'

function BusinessBasket(props) {

  if(props.basket && props.basket.items) {
    var items = props.basket.items.map((e, i)=> {
      return (
        <div 
          className="bus-basket-item"
          key={e.item + i}
        >
          <div className='item-weight'>
            <p>Item: <span>{e.item}</span></p>
          
            <p>Weight: <span>{e.weight}</span></p>
          </div>
          <div>
            <p>FMV: <span>${utilFunc.formatNumber(Number(e.FMV), 2, 3, ',', '.')}</span></p>
          </div>
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
      <div className='business-basket-btn-grp'>
        <button
          className='business-basket-edit-btn'
          onClick={() => props.editBasket(props.index)}
          >Edit</button>
      <button
          className='business-basket-edit-btn'
          onClick={() => props.deleteBasket({index: props.index, id: props.basket.basket_id})}
          >Delete</button>
      </div>

      <div className='business-basket-info-contain'>
          <p className='basket-status'>{props.basket ? checkStatus : ''}</p>
          <p>{props.basket ? fromEpoch(props.basket.pick_up_time, 'ddd, MMM Do, h:mm a') : ''}</p>
          {items}
      </div>

    </div>
  );
}

export default connect(null, {deleteBasket, editBasket})(BusinessBasket);