import React from 'react';
import axios from 'axios';

// import Map from './Map/Map';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import WishList from './WishList/WishList';
import Header from '../../components/Header/Header.js';

import * as sortUtil from '../../../config/sortUtil';

import './NonProfit.css';
import MapContainer from '../../components/Map/googleMap'

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 9,
      baskets: [],
      scheduledBaskets: [],
      wishlist: [],
      nonProfitInfo: {}
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
    this.getUserInfo = this.getUserInfo.bind(this);
    this.displayBusinessToMap = this.displayBusinessToMap.bind(this);
  }

  componentDidMount() {
    this.getBaskets();
    this.getScheduledBaskets();
    this.getWishList();
    this.getUserInfo();    
  }

  componentWillUpdate() {
    this.displayBusinessToMap()    
  }

  getUserInfo() {
    // change axios request to send user_id based on session after longin when routing and auth are fully implemented.
    axios.get(`/api/nonprofit/${+this.state.nonProfitID}`).then( userData => {
      this.setState({
        nonProfitInfo: userData.data[0]
      })
    })
  }

  getBaskets() {
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 2, 4, 6];

    axios
      .post(`/api/basket/${currentLocalTime}`, { businessIDs })
      .then((baskets) => {
        console.log(baskets)
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

  displayBusinessToMap() {
    let arr = []
    let { baskets } = this.state

    for(let i = 0; i < baskets.length; i++) {
      arr.push(baskets[i].business_id)
    }
    console.log(arr.sort( (a,b) => a - b))
  }

  render() {
    const { baskets, scheduledBaskets, wishlist, nonProfitInfo } = this.state;

    // let sortedBasketsByWishListItems = sortUtil.sortByWishList(
    //   baskets,
    //   wishlist
    // );
    console.log(wishlist)
    return (
      <main className="mobile">
        <Header />
        <div className='np-view-main'>
        <div className='np-view-col-1'>
          <div className='google-maps'>
            <MapContainer 
              mapCenter={{lat: nonProfitInfo.latitude, lng: nonProfitInfo.longitude}}
              npName={nonProfitInfo.company_name}
              address={nonProfitInfo.street_address}
              city={`${nonProfitInfo.city} ${nonProfitInfo.state}`}
            />
          </div>

          <div className='np-wishlist-basket-container'>
            <h3>Wish List</h3>
              <WishList
                _wishlist={wishlist}
                _createWishList={this.createWishList}
                _addWishListItem={this.addWishListItem}
                parent_editWishListItem={this.parent_editWishListItem}
                _removeWishListItem={this.removeWishListItem}
              />
          </div>

          </div>
          
          <div className='np-view-col-2'>
        <div className='np-sched-basket-container'>
        <h3>Scheduled Baskets</h3>
        <ScheduleList
          _scheduledBaskets={scheduledBaskets}
          _scheduleBasket={this.scheduleBasket}
          _cancelBasket={this.cancelBasket}
        />
      </div>

        <div className='np-avail-basket-container'>
        <h3>Available Baskets</h3>
        <NonProfitBasketList
          _baskets={baskets}
          _scheduleBasket={this.scheduleBasket}
        />
        </div>
        </div>
        </div>
      </main>
    );
  }
}

export default NonProfit;
