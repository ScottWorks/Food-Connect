import React from 'react'

function BusinessItem(props) {
  return (
    <div className="BusinessItem">
      <p>{props.item.item}</p>
      <p>{props.item.weight}</p>
      <p>{props.item.FMV}</p>
      <button
        onClick={() => props.deleteItem(props.index)}
      >X</button>
    </div>
  );
}

export default BusinessItem;