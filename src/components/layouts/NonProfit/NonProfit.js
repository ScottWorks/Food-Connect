import React from 'react';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';

import axios from 'axios';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      baskets: [
        {
          resturant: 'Houstons',
          featuredFood: ['Bagels', 'Croissants'],
          distanceFrom: 10.4,
          availability: { mon: '8-4', tue: '8-4', wed: '8-4' }
        },
        {
          resturant: 'McDonalds',
          featuredFood: ['Muffins', 'Donuts'],
          distanceFrom: 0.7,
          availability: { mon: '8-4', tue: '8-4', wed: '8-4' }
        },
        {
          resturant: 'Pancho Villas',
          featuredFood: ['Tortilla', 'Nachos'],
          distanceFrom: 32,
          availability: { mon: '8-4', tue: '8-4', wed: '8-4' }
        }
      ]
    };

    this.getBaskets = this.getBaskets.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
  }

  getBaskets() {
    axios.get('/api/basket').then((baskets) => {
      this.setState({
        baskets: baskets.data
      });
    });
  }

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
