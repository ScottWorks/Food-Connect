import React from 'react';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';

import axios from 'axios';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      baskets: []
    };
    this.getBaskets = this.getBaskets.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
  }

  getBaskets() {
    const dummyDataBusinessIDs = [1, 3, 4];

    axios.get('/api/basket', { dummyDataBusinessIDs }).then((baskets) => {
      this.setState({
        baskets: baskets.data
      });
    });
  }

  reserveBasket() {}

  render() {
    const { baskets } = this.state;

    return (
      <main className="mobile">
        <div className="NonProfit">Non Profit Page</div>
        <ScheduleList />
        <NonProfitBasketList baskets={baskets} />
      </main>
    );
  }
}

export default NonProfit;
