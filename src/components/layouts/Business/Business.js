import React from 'react'
import axios from 'axios'
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

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    var temp = 1
    axios.get(`/api/basket/${temp}/${(new Date).getTime()}`).then(res => {
      this.props.setBasket(res.data)
    })
    // .then(this.setState = ({
    //   loading: false
    // }))
  }

  render() {
    if (this.state.loading) {
      return <LoadingDots />
    }
    else {
      return (
        <div className="Business">
          <Header />
          <div className="bus-top-bar">
            <div className='donut-container'>
              {/* <Donut/> */}
            </div>
            <div className='barchart-container'>
              {/* <StatChart/> */}
            </div>
          </div>
          <div className='business-table-list-container'>
            <BusinessTable className='business-table-container' />
            <BusinessBasketList className='business-basket-list-container' />
          </div>
        </div>
      );
    }
  }
}

export default connect(null, { setBasket })(Business);