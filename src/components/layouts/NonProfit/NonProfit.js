import React from 'react';
import axios from 'axios';

// import Map from './Map/Map';
import Header from '../../components/Header/Header.js';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Sort from './Sort/Sort';
import WishList from './WishList/WishList';

import * as sortUtil from '../../../config/sortUtil';

import './NonProfit.css';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 7,
      nonProfitInfo: '',
      baskets: [],
      modifiedBaskets: [],
      scheduledBaskets: [],
      wishlist: []
    };

    this.getBaskets = this.getBaskets.bind(this);
    this.getScheduledBaskets = this.getScheduledBaskets.bind(this);
    this.scheduleBasket = this.scheduleBasket.bind(this);
    this.cancelBasket = this.cancelBasket.bind(this);
    this.getWishList = this.getWishList.bind(this);
    this.createWishList = this.createWishList.bind(this);
    this.addWishListItem = this.addWishListItem.bind(this);
    this.parent_editWishListItem = this.parent_editWishListItem.bind(this);
    this.removeWishListItem = this.removeWishListItem.bind(this);
    this.modifyWishListItem = this.modifyWishListItem.bind(this);
    this.sortBaskets = this.sortBaskets.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
    this.getScheduledBaskets();
    this.getWishList();
  }

  getBaskets() {
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 2, 3, 4, 5, 6, 7, 8];

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

  scheduleBasket(scheduledTime, phoneNumber, message, basketID) {
    const { nonProfitID } = this.state;

    let promise = axios.put(`/api/basket/update/${nonProfitID}`, {
      scheduledTime,
      phoneNumber,
      message,
      basketID
    });

    Promise.all([promise]).then(() => {
      this.getScheduledBaskets();
      this.getBaskets();
    });

    alert('Reservation Successful!');
  }

  cancelBasket(phoneNumber, basketID) {
    const message = `Basket ${basketID} pickup has been canceled.`;

    let promise = axios.put(`/api/basket/cancel/${basketID}`, {
      phoneNumber,
      message
    });

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

  createWishList() {
    const { nonProfitID } = this.state;

    axios.post(`/api/wishlist/${nonProfitID}`).then(() => {
      this.getWishList();
    });
  }

  addWishListItem(item) {
    const updatedWishList = [...this.state.wishlist.items, { item: item }];

    this.modifyWishListItem(updatedWishList);
  }

  parent_editWishListItem(idx, item) {
    const updatedWishList = [...this.state.wishlist.items];

    updatedWishList.splice(idx, 1, { item: item });
    this.modifyWishListItem(updatedWishList);
  }

  removeWishListItem(idx) {
    const updatedWishList = [...this.state.wishlist.items];

    updatedWishList.splice(idx, 1);
    this.modifyWishListItem(updatedWishList);
  }

  modifyWishListItem(updatedWishList) {
    const { nonProfitID } = this.state;

    axios
      .put(`/api/wishlist/modify/${nonProfitID}`, { updatedWishList })
      .then(() => {
        this.getWishList();
      });
  }

  sortBaskets(sortType) {
    const { baskets, wishlist } = this.state;
    let modifiedBaskets;

    switch (sortType) {
      case 'wishlist':
        modifiedBaskets = sortUtil.sortByWishList(baskets, wishlist);
        console.log(modifiedBaskets);
        this.setState({
          baskets: modifiedBaskets
        });
        break;

      case 'newestFirst':
        console.log('newestFirst');
        this.getBaskets();
        break;

      case 'oldestFirst':
        console.log('oldestFirst');
        break;

      default:
        modifiedBaskets = sortUtil.sortByWishList(baskets, wishlist);
        this.setState({
          baskets: modifiedBaskets
        });
    }
  }

  render() {
    const { baskets, scheduledBaskets, wishlist } = this.state;

    () => {
      this.sortBaskets();
    };

    return (
      <main className="mobile">
        <Header />
        <div className="nonprofit_main">
          <h2>Non Profit Page</h2>
        </div>
        <h2>Wish List</h2>
        <WishList
          _wishlist={wishlist}
          _createWishList={this.createWishList}
          _addWishListItem={this.addWishListItem}
          parent_editWishListItem={this.parent_editWishListItem}
          _removeWishListItem={this.removeWishListItem}
        />
        <h2>Scheduled Baskets</h2>
        <ScheduleList
          _scheduledBaskets={scheduledBaskets}
          _scheduleBasket={this.scheduleBasket}
          _cancelBasket={this.cancelBasket}
        />
        <h2>Available Baskets</h2>
        <Sort _sortBaskets={this.sortBaskets} />
        <NonProfitBasketList
          _baskets={baskets}
          _scheduleBasket={this.scheduleBasket}
        />
      </main>
    );
  }
}

export default NonProfit;
