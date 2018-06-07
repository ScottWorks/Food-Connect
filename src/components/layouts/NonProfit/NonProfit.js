import React from 'react';
import axios from 'axios';

// import Map from './Map/Map';
import Header from '../../components/Header/Header.js';
import NonProfitBasketList from './NonProfitBasketList/NonProfitBasketList';
import ScheduleList from './ScheduleList/ScheduleList';
import Search from './Search/Search';
import Sort from './Sort/Sort';
import WishList from './WishList/WishList';

import * as searchUtil from '../../../config/searchUtil';
import * as sortUtil from '../../../config/sortUtil';

import './NonProfit.css';
import MapContainer from '../../components/Map/googleMap';

class NonProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      nonProfitID: 2,
      nonProfitInfo: {},
      baskets: [],
      wishList: [],
      scheduledBaskets: [],
      searchInput: '',
      markers: []
    };

    this.initializeComponent = this.initializeComponent.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.displayBusinessToMap = this.displayBusinessToMap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scheduleBasket = this.scheduleBasket.bind(this);
    this.cancelBasket = this.cancelBasket.bind(this);
    this.createWishList = this.createWishList.bind(this);
    this.addWishListItem = this.addWishListItem.bind(this);
    this.parent_editWishListItem = this.parent_editWishListItem.bind(this);
    this.removeWishListItem = this.removeWishListItem.bind(this);
    this.modifyWishListItem = this.modifyWishListItem.bind(this);
    this.sortBaskets = this.sortBaskets.bind(this);
    this.searchBaskets = this.searchBaskets.bind(this);
  }

  componentDidMount = async () => {
    
    await axios.get('/api/auth/me').then( user => {
        if(typeof user.data.user_id === 'number' && user.data.acct_type === 'np') {
          console.log('Validated!', user)
        } else if (typeof user.data.user_id === 'number' && user.data.acct_type === 'b') {
          window.location.assign('/#/business')
        } else {
          window.location.assign('/#/login')
          console.log('Sorry, you are not allowed...')
        }
    }).catch( err => {
      console.log(err)
      window.location.assign('/#/login')
      console.log('Sorry, you are not allowed...')
    })

    this.initializeComponent();
    this.getUserInfo();
  }


  initializeComponent () {
    const { nonProfitID } = this.state;
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 2, 3, 4, 5, 6, 7, 8];
    // const businessIDs = [60, 70, 80];

    let basketPromise = axios
      .post(`/api/basket/${currentLocalTime}`, { businessIDs })
      .then((baskets) => {
        console.log(baskets);
        this.setState({
          baskets: baskets.data
        }, () => this.displayBusinessToMap() );
      });

    let wishListPromise = axios
      .get(`/api/wishlist/${nonProfitID}`)
      .then((wishList) => {
        this.setState({
          wishList: wishList.data[0]
        });
      });

    let schedulePromise = axios
      .get(`/api/scheduled/baskets/${nonProfitID}`)
      .then((scheduledBaskets) => {
        this.setState({
          scheduledBaskets: scheduledBaskets.data
        });
      });      

    Promise.all([basketPromise, wishListPromise, schedulePromise]).then(() => {
      const { baskets, wishList } = this.state;

      if (baskets.length > 0) {
        let modifiedBaskets = sortUtil.sortByWishList(baskets, wishList);

        this.setState({
          baskets: modifiedBaskets
        });
      }
    });
  }

  getUserInfo() {
    // change axios request to send user_id based on session after longin when routing and auth are fully implemented.
    axios.get(`/api/nonprofit/${+this.state.nonProfitID}`).then((userData) => {
      this.setState({
        nonProfitInfo: userData.data[0]
      });
    });
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
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
      this.initializeComponent();
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
      this.initializeComponent();
    });

    alert('Reservation Canceled!');
  }

  createWishList() {
    const { nonProfitID } = this.state;

    axios.post(`/api/wishlist/${nonProfitID}`).then(() => {
      this.initializeComponent();
    });
  }

  addWishListItem(e, item) {
    e.preventDefault();
    const updatedWishList = [...this.state.wishList.items, { item: item }];

    this.modifyWishListItem(updatedWishList);
  }

  parent_editWishListItem(e, idx, item) {
    e.preventDefault();
    const updatedWishList = [...this.state.wishList.items];

    updatedWishList.splice(idx, 1, { item: item });
    this.modifyWishListItem(updatedWishList);
  }

  removeWishListItem(idx) {
    const updatedWishList = [...this.state.wishList.items];

    updatedWishList.splice(idx, 1);
    this.modifyWishListItem(updatedWishList);
  }

  modifyWishListItem(updatedWishList) {
    const { nonProfitID } = this.state;

    axios
      .put(`/api/wishlist/modify/${nonProfitID}`, { updatedWishList })
      .then(() => {
        this.initializeComponent();
      });
  }

  sortBaskets(sortType) {
    const { baskets, wishList } = this.state;
    let modifiedBaskets;

    if (baskets.length > 0) {
      switch (sortType) {
        case 'wishlist':
          if (wishList.items && wishList.items.length > 0) {
            modifiedBaskets = sortUtil.sortByWishList(baskets, wishList);
            this.setState({
              baskets: modifiedBaskets
            });
          } else {
            alert('Add items to Wish List!');
          }
          break;

        case 'latest':
          modifiedBaskets = sortUtil.sortRecent(baskets);
          this.setState({
            baskets: modifiedBaskets
          });
          break;

        case 'oldest':
          modifiedBaskets = sortUtil.sortOldest(baskets);
          this.setState({
            baskets: modifiedBaskets
          });
          break;
      }
    }
  }

  searchBaskets(e) {
    e.preventDefault();
    const { baskets, searchInput } = this.state;
    const currentLocalTime = new Date().getTime();
    const businessIDs = [1, 2, 3, 4, 5, 6, 7, 8];

    axios
      .post(`/api/basket/${currentLocalTime}`, { businessIDs })
      .then((baskets) => {
        let modifiedBaskets = searchUtil.searchBaskets(
          baskets.data,
          searchInput
        );

        this.setState({
          baskets: modifiedBaskets
        });
      });
  }

  displayBusinessToMap() {
    let arr = [];
    let { baskets } = this.state;

    console.log(baskets)

    for (let i = 0; i < baskets.length; i++) {
      arr.push(baskets[i].business_id);
    }

    var uniq = [...new Set(arr)]
    console.log(uniq)

   axios.post('/api/nonprofit/businesslocation', { businessID: uniq } ).then(locations => {
     console.log(locations)
     this.setState({
       markers: locations.data
     })
   })
  }

  render() {
    const {
      nonProfitInfo,
      baskets,
      wishList,
      scheduledBaskets,
      searchInput,
      markers
    } = this.state;

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
