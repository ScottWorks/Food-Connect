import React from 'react';
import axios from 'axios';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Header from '../../components/Header/Header.js';
import './NonProfit.css';
import MapContainer from '../../components/Map/googleMap'

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 4,
      baskets: [],
      scheduledBaskets: []
    };

    this.getBaskets = this.getBaskets.bind(this);
    this.getScheduledBaskets = this.getScheduledBaskets.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
    this.getScheduledBaskets();
  }

  getBaskets() {
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 4];

    axios
      .post(`/api/basket/${currentLocalTime}`, { businessIDs: businessIDs })
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

  updateBasket(basketID, scheduledTime) {
    const { nonProfitID } = this.state;

    axios.put(`/api/basket/${nonProfitID}`, { basketID, scheduledTime });

    this.getBaskets();
    this.getScheduledBaskets();

    alert('Reserved!');
  }

  render() {
    const { baskets, scheduledBaskets } = this.state;

    return (
      <main className="mobile">
        <Header />
        <ScheduleList scheduledBaskets={scheduledBaskets} />
        <MapContainer />
        <NonProfitBasketList
          baskets={baskets}
          _updateBasket={this.updateBasket}
        />
      </main>
    );
  }
}

export default NonProfit;
