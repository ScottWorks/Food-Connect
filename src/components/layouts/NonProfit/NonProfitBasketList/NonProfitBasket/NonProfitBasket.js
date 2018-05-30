import React from 'react';

function NonProfitBasket(props) {
  const { currentBasket, _inspectBasket, _showContactInfo } = props;

  return (
    <section>
      <p>{currentBasket.company_name}</p>
      <p>{currentBasket.operating_hrs}</p>
      <button onClick={() => _inspectBasket(currentBasket)}>Inspect</button>
      <button onClick={() => _showContactInfo(currentBasket)}>Contact</button>
    </section>
  );
}

export default NonProfitBasket;
