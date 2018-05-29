import React from 'react';
import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className="mobile">
        <div className="NonProfit">Non Profit Page</div>
        <ScheduleList />
        <NonProfitBasketList />
      </main>
    );
  }
}

export default NonProfit;
