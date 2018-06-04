import React from 'react';
import NonProfitBasket from './NonProfitBasket/NonProfitBasket';
import '../../../../assets/styles/NonProfitBasketList.css';

function NonProfitBasketList(props) {
  const { _baskets, _scheduleBasket } = props;

  return (
    <section className="np-bucket-list">
      <DisplayBaskets _baskets={_baskets} _scheduleBasket={_scheduleBasket} />
    </section>
  );
}

const DisplayBaskets = ({ _baskets, _scheduleBasket }) => {
  return _baskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <NonProfitBasket
          currentBasket={elem}
          _scheduleBasket={_scheduleBasket}
        />
      </div>
    );
  });
};

export default NonProfitBasketList;
