import React from 'react';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Header from "../../components/Header/Header.js"
import './NonProfit.css'

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
    axios.get('/api/basket').then((baskets) => {
      this.setState({
        baskets: baskets.data
      });
    });
  }

  reserveBasket() {}

  showContactInfo(currentBasket) {
    alert(currentBasket.company_name);
  }

  render() {
    const { baskets } = this.state;

    return (
      <main className="mobile">
        <Header/>
        <div className="nonprofit_main"><h2>Non Profit Page</h2></div>
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
