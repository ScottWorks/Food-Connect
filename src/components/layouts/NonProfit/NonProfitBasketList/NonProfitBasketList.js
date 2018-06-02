import React from 'react';
import NonProfitBasket from './NonProfitBasket/NonProfitBasket';

function NonProfitBasketList(props) {
  const { baskets, _scheduleBasket } = props;

  const displayBaskets = baskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <NonProfitBasket
          currentBasket={elem}
          _scheduleBasket={_scheduleBasket}
        />
      </div>
    );
  });
  return <section>{displayBaskets}</section>;
}

export default NonProfitBasketList;
