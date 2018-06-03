import React from 'react';
import axios from 'axios';
// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import WishList from './WishList/WishList';
import Header from '../../components/Header/Header.js';
import './NonProfit.css';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 4,
      baskets: [],
      scheduledBaskets: [],
      wishlist: []
    };

    this.getBaskets = this.getBaskets.bind(this);
    this.getScheduledBaskets = this.getScheduledBaskets.bind(this);
    this.scheduleBasket = this.scheduleBasket.bind(this);
    this.cancelBasket = this.cancelBasket.bind(this);
    this.getWishList = this.getWishList.bind(this);
    this.addWishListItem = this.addWishListItem.bind(this);
    this.removeWishListItem = this.removeWishListItem.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
    this.getScheduledBaskets();
    this.getWishList();
  }

  getBaskets() {
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 2, 4, 6];

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

  scheduleBasket(scheduledTime, basketID) {
    const { nonProfitID } = this.state;

    let promise = axios.put(`/api/basket/update/${nonProfitID}`, {
      scheduledTime,
      basketID
    });

    Promise.all([promise]).then(() => {
      this.getScheduledBaskets();
      this.getBaskets();
    });

    alert('Reservation Successful!');
  }

  cancelBasket(basketID) {
    let promise = axios.put(`/api/basket/cancel/${basketID}`);

    Promise.all([promise]).then(() => {
      this.getScheduledBaskets();
      this.getBaskets();
    });

    alert('Reservation Canceled!');
  }

  getWishList() {
    const { nonProfitID } = this.state;

    axios.get(`/api/wishlist/${nonProfitID}`).then((wishlist) => {
      this.setState({
        wishlist: wishlist.data[0]
      });
    });
  }

  addWishListItem(item) {
    const { nonProfitID } = this.state;
    const updatedWishList = [...this.state.wishlist.items, { item: item }];

    axios
      .put(`/api/wishlist/add/${nonProfitID}`, { updatedWishList })
      .then(() => {
        this.getWishList();
      });
  }

  removeWishListItem(idx) {
    const { nonProfitID } = this.state;
    const updatedWishList = [...this.state.wishlist.items];

    updatedWishList.splice(idx, 1);

    axios
      .put(`/api/wishlist/remove/${nonProfitID}`, { updatedWishList })
      .then(() => {
        this.getWishList();
      });
  }

  render() {
    const { baskets, scheduledBaskets, wishlist } = this.state;

    return (
      <main className="mobile">
        <Header />
        <div className="nonprofit_main">
          <h2>Non Profit Page</h2>
        </div>
        <h3>Wish List</h3>
        <WishList
          _wishlist={wishlist}
          _addWishListItem={this.addWishListItem}
          _removeWishListItem={this.removeWishListItem}
        />
        <h3>Scheduled Baskets</h3>
        <ScheduleList
          _scheduledBaskets={scheduledBaskets}
          _scheduleBasket={this.scheduleBasket}
          _cancelBasket={this.cancelBasket}
        />
        <h3>Available Baskets</h3>
        <NonProfitBasketList
          _baskets={baskets}
          _scheduleBasket={this.scheduleBasket}
        />
      </main>
    );
  }
}

export default NonProfit;
