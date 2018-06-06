import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../../../../../ducks/businessReducer'
import './BusinessItems.css'

function BusinessItem(props) {
  return (
    <div className="BusinessItem">
      <div className='business-items-details'>
      <p>{props.item.item}</p>
      <p>{props.item.weight} lbs</p>
      <p>${props.item.FMV}</p>
      </div>
      <button
      className='business-item-delete-x'
        onClick={() => props.deleteItem(props.index)}
      >X</button>
    </div>
  );
}

export default connect(null, {deleteItem})(BusinessItem);