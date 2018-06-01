import React from 'react';
import axios from 'axios';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Header from '../../components/Header/Header.js';
import './NonProfit.css';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 7,
      baskets: [],
      scheduledBaskets: []
    };

    this.getBaskets = this.getBaskets.bind(this);
    this.getScheduledBaskets = this.getScheduledBaskets.bind(this);
    this.updateBasket = this.updateBasket.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
    this.getScheduledBaskets();
  }

  getBaskets() {
    const currentLocalTime = new Date().getTime();
    const businessIDs = [4];

    axios
      .post(`/api/basket/${currentLocalTime}`, { businessIDs })
      .then((baskets) => {
        this.setState({
          baskets: baskets.data
        });
      });
  }

  getScheduledBaskets() {
    const { nonProfitID } = this.state;

    axios
      .get(`/api/scheduled/baskets/${nonProfitID}`)
      .then((scheduledBaskets) => {
        this.setState({
          scheduledBaskets: scheduledBaskets.data
        });
      });
  }

  updateBasket(scheduledTime, status, basketID) {
    const { nonProfitID } = this.state;

    let promise = axios.put(`/api/basket/update/${nonProfitID}`, {
      scheduledTime,
      status,
      basketID
    });

    Promise.all([promise]).then(() => {
      this.getScheduledBaskets();
      this.getBaskets();
    });

    alert('Reservation Successful!');
  }

  render() {
    const { baskets, scheduledBaskets } = this.state;

    return (
      <main className="mobile">
        <Header />
        <div className="nonprofit_main">
          <h2>Non Profit Page</h2>
        </div>
        <h3>Scheduled Baskets</h3>
        <ScheduleList scheduledBaskets={scheduledBaskets} />
        <h3>Available Baskets</h3>
        <NonProfitBasketList
          baskets={baskets}
          _updateBasket={this.updateBasket}
        />
      </main>
    );
  }
}

export default NonProfit;
