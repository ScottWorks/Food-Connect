import React from 'react';

class NonProfitBasket extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { currentBasket } = this.props;
    return (
      <section>
        <p>{currentBasket.resturant}</p>
        <p>{currentBasket.featuredFood}</p>
        <p>{currentBasket.distanceFrom}</p>
      </section>
    );
  }
}

export default NonProfitBasket;
