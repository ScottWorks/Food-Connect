import React from 'react';
import NonProfitBasket from './NonProfitBasket/NonProfitBasket';

class NonProfitBasketList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section>
        <NonProfitBasket />
      </section>
    );
  }
}

export default NonProfitBasketList;
