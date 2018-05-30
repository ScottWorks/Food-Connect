import React from 'react';

function NonProfitBasket(props) {
  const { currentBasket } = props;
  return (
    <section>
      <p>{currentBasket.company_name}</p>
      <p>{currentBasket.operating_hrs}</p>
      {/* <p>{currentBasket.distanceFrom}</p> */}
    </section>
  );
}

export default NonProfitBasket;
