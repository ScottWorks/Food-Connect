import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import flatten from 'lodash/flatten'
import { connect } from 'react-redux'
import { setBasket } from '../../../ducks/businessReducer'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Business.css'
import Donut from '../../components/Stats/Donut';
import StatChart from '../../components/Stats/StatChart'
import LoadingDots from '../../components/LoadingPages/LoadingDots/LoadingDots';
import NewHeader from '../../components/Header/NewHeader';
import * as generalUtil from '../../../config/generalUtil';

class Business extends React.Component {
  constructor(props){
    super(props);

    this.state={
      hideChart: true,
      loading: false,
      businessID:'',
      nonProfitInfo:{},
      businessInfo:'',
      totalWeight: 0,
      totalFMV: 0,
      allItems: []
    }

    this.checkIfMobile = this.checkIfMobile.bind(this);
  }

  componentDidMount = async () => {

    await axios.get('/api/auth/me').then( user => {
      if(typeof user.data.user_id === 'number' && user.data.acct_type === 'b') {
        console.log('Validated!', user)
        this.setState({
          businessID: user.data.acct_id,
          businessInfo: user.data
        })

        var itemArrFlat = []
        axios.get(`/api/all/basket/${this.state.businessID}`).then(res => {
          //Logic for loading screen time
        let currentTime = Date.now();
        let elapsed = currentTime - this.state.startTime;
        if (elapsed < 2000) {
          setTimeout(() => this.setState({ loading: false }), 2000);
        } else {
          this.setState({ loading: false });
        }
        
        try{
          for (let i = 0; i < res.data.length; i++) {
            let itemArr = res.data[i].items.slice()
            itemArrFlat.push(itemArr)
          }
          let totalWeight = 0
          let totalFMV = 0
          let itemArr = _.flatten([...itemArrFlat])
          for(let i = itemArr.length - 1; i >= 0; i--) {
            itemArr[i].item = generalUtil.itemNameConverter(itemArr[i].item)

            for(let j = 0; j < itemArr.length; j++) {
              itemArr[j].item = generalUtil.itemNameConverter(itemArr[j].item)
              if(itemArr[i].item === itemArr[j].item && i !== j) {
                itemArr[i].weight = Number(itemArr[i].weight)
                itemArr[i].FMV = Number(itemArr[i].FMV)
                itemArr[j].weight = Number(itemArr[j].weight)
                itemArr[j].FMV = Number(itemArr[j].FMV)
                itemArr[i].weight += itemArr[j].weight
                itemArr[i].FMV += itemArr[j].FMV
                itemArr.splice(j, 1)
                i--
              }
            }
            totalWeight += itemArr[i].weight
            totalFMV += itemArr[i].FMV
          }
          this.setState({allItems: itemArr, totalWeight, totalFMV})
        } catch(err){
          console.log(err);
          window.location.assign('/#/500')
        }

        })

      } else if (typeof user.data.user_id === 'number' && user.data.acct_type === 'np') {
        window.location.assign('/#/nonprofit')
      } else {
        window.location.assign('/#/login')
        console.log('Sorry, you are not allowed...')
      }
  }).catch( err => {
    window.location.assign('/#/login')
    console.log('Sorry, you are not allowed...')
  })

    
    axios.get(`/api/basket/${this.state.businessID}/${(new Date).getTime()}`).then(res => {
      this.props.setBasket(res.data)
    })
    this.checkIfMobile;
    window.addEventListener('resize', this.checkIfMobile)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.checkIfMobile)
  }

  checkIfMobile(){
    this.setState({hideChart: (window.innerWidth < 667)})
  }

  render() {
    if (this.state.loading) {
      return <LoadingDots />
    }
    else {
    return (
      <div className="Business">
        {/* <Header /> */}
        <NewHeader acctType = {this.state.businessInfo.acct_type}/>
        <div className="bus-top-bar">
        {
          this.state.hideChart ? null : (
            <div className='donut-container'>
            <Donut numColors={this.state.allItems.length} totalWeight={this.state.totalWeight} totalFMV={this.state.totalFMV} allItems={this.state.allItems} businessID={this.state.businessID}/>
          </div>)}

          {
            this.state.hideChart ? null : (
              <div className='barchart-container'>
            <StatChart numColors={this.state.allItems.length} allItems={this.state.allItems} totalWeight={this.state.totalWeight} totalFMV={this.state.totalFMV} businessID={this.state.businessID}/>
          </div>   
            )
          }
        </div>
        <div className='business-table-list-container'>
          <BusinessTable businessID={this.state.businessID} className='business-table-container'/>
          <BusinessBasketList businessID={this.state.businessID} className='business-basket-list-container'/>
        </div>
      </div>
    )};
  }
}

export default connect(null, { setBasket })(Business);