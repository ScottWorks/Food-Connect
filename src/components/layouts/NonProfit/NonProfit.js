import React from 'react';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Header from '../../components/Header/Header.js';
import './NonProfit.css';

import axios from 'axios';
import moment from 'moment';

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
    const currentLocalTime = new Date().getTime();
    const dummyDataBusinessIDs = [1, 3, 4];

    const testTime = moment.unix(currentLocalTime);

    console.log(currentLocalTime, testTime);

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
        <Header />
        <div className="nonprofit_main">
          <h2>Non Profit Page</h2>
        </div>
        <ScheduleList />
        <NonProfitBasketList baskets={baskets} />
      </main>
    );
  }
}

export default NonProfit;
