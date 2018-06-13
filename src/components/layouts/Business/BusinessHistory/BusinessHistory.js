import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import flatten from 'lodash/flatten';
import Header from '../../../components/Header/Header';
import './BusinessHistory.css';
import * as utilFunc from '../../../../config/analyticsUtil';
import * as generalUtil from '../../../../config/generalUtil';

class BusinessHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      businessID: '',
      allItems: [],
      totalWeight: 0,
      totalFMV: 0,
      businessInfo: ''
    };
  }

  componentDidMount = async () => {
    await axios
      .get('/api/auth/me')
      .then((user) => {
        if (
          typeof user.data.user_id === 'number' &&
          user.data.acct_type === 'b'
        ) {
          console.log('Validated!', user);
          this.setState({
            businessID: user.data.acct_id,
            businessInfo: user.data
          });
        } else {
          window.location.assign('/#/login');
          console.log('Sorry, you are not allowed...');
        }
      })
      .catch((err) => {
        window.location.assign('/#/login');
        console.log('Sorry, you are not allowed...');
      });

    var itemArrFlat = [];
    axios.get(`/api/all/basket/${this.state.businessID}`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let itemArr = res.data[i].items.slice();
        itemArrFlat.push(itemArr);
      }
      let totalWeight = 0;
      let totalFMV = 0;
      let itemArr = _.flatten([...itemArrFlat]);
      for (let i = itemArr.length - 1; i >= 0; i--) {
        itemArr[i].item = generalUtil.itemNameConverter(itemArr[i].item);
        for (let j = 0; j < itemArr.length; j++) {
          itemArr[j].item = generalUtil.itemNameConverter(itemArr[j].item);
          if (itemArr[i].item === itemArr[j].item && i !== j) {
            itemArr[i].weight = Number(itemArr[i].weight);
            itemArr[i].FMV = Number(itemArr[i].FMV);
            itemArr[j].weight = Number(itemArr[j].weight);
            itemArr[j].FMV = Number(itemArr[j].FMV);
            itemArr[i].weight += itemArr[j].weight;
            itemArr[i].FMV += itemArr[j].FMV;
            itemArr.splice(j, 1);
            i--;
          }
        }
        totalWeight += ~~itemArr[i].weight;
        totalFMV += ~~itemArr[i].FMV;
      }
      this.setState({ allItems: itemArr, totalWeight, totalFMV });
    });
  };

  render() {
    var displayAllItems = this.state.allItems.map((e, index) => {
      return (
        <div key={e + index} className="BusinessHistory-item-row">
          <div className="BusinessHistory-column">
            <p>{e.item}</p>
          </div>
          <div className="BusinessHistory-column">
            <p>{utilFunc.formatNumber(e.weight, 0, 3, ',', '.')}</p>
          </div>
          <div className="BusinessHistory-column">
            <p>${utilFunc.formatNumber(e.FMV, 2, 3, ',', '.')}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Header acctType={this.state.businessInfo.acct_type} />
        <div className="BusinessHistory">
          <div className="BusinessHistory-print-button">
            <h1>Non-Profit Donations 2018</h1>
            <button onClick={() => window.print()}>Print</button>
          </div>
          <div className="BusinessHistory-column-names">
            <div className="BusinessHistory-column">
              <p>Items</p>
            </div>
            <div className="BusinessHistory-column">
              <p>Weight</p>
            </div>
            <div className="BusinessHistory-column">
              <p>Fair Market Value</p>
            </div>
          </div>
          {displayAllItems}
          <div className="BusinessHistory-column-totals">
            <div className="BusinessHistory-column">
              <p>{`Totals: ${this.state.allItems.length}`}</p>
            </div>
            <div className="BusinessHistory-column">
              <p>
                {utilFunc.formatNumber(this.state.totalWeight, 0, 3, ',', '.')}
              </p>
            </div>
            <div className="BusinessHistory-column">
              <p>
                ${utilFunc.formatNumber(this.state.totalFMV, 2, 3, ',', '.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessHistory;
