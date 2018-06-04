import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../../../../../ducks/businessReducer'
import './BusinessItems.css'

function BusinessItem(props) {
  return (
    <div className="BusinessItem">
      <p>Item:</p>
      <p>{props.item.item}</p>
      <p>Weight:</p>
      <p>{props.item.weight}</p>
      <p>Fair Market Value:</p>
      <p>${props.item.FMV}</p>
      <button
        onClick={() => props.deleteItem(props.index)}
      >X</button>
    </div>
  );
}

export default connect(null, {deleteItem})(BusinessItem);