import React from 'react';
import NonProfitBasket from './NonProfitBasket/NonProfitBasket';

function NonProfitBasketList(props) {
  const { baskets, _updateBasket } = props;

  const displayBaskets = baskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <NonProfitBasket currentBasket={elem} _updateBasket={_updateBasket} />
      </div>
    );
  });
  return <section>{displayBaskets}</section>;
}

export default NonProfitBasketList;
