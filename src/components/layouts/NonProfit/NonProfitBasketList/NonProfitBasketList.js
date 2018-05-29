import React from 'react';
import NonProfiBasket from './NonProfitBasket/NonProfitBasket';

class NonProfitBasketList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section>
        <NonProfiBasket />
      </section>
    );
  }
}

export default NonProfitBasketList;
