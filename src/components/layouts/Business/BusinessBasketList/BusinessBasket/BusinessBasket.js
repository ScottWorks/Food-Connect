import React from 'react'

function BusinessBasket(props) {
  if(props.basket) {
    var items = props.basket.items.map((e, i) => {
      return (
        <div>
          <p>{e.item}</p>
          <p>{e.weight}</p>
          <p>{e.FMV}</p>
        </div>
      )
    })
  }
  return (
    <div className="BusinessBasket">
      <div>
        {items}
      </div>
    </div>
  );
}

export default BusinessBasket;