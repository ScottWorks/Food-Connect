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
    this.inspectBasket = this.inspectBasket.bind(this);
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

  inspectBasket(currentBasket) {
    alert(currentBasket.company_name);
  }

  reserveBasket() {}

  showContactInfo(currentBasket) {
    alert(currentBasket.company_name);
  }

  render() {
    const { baskets } = this.state;

    return (
      <main className="mobile">
        <div className="NonProfit">Non Profit Page</div>
        <ScheduleList />
        <NonProfitBasketList
          baskets={baskets}
          _inspectBasket={this.inspectBasket}
          _showContactInfo={this.showContactInfo}
        />
      </main>
    );
  }
}

export default NonProfit;
