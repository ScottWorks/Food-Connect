import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setBasket } from '../../../ducks/businessReducer'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'
import Header from'../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Business.css'

class Business extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      baskets: [],
      pick_up_time: 0,
      fromBasket: false,
      currentBasketID: -1
    }
  }

  //When component mounts get unexpired baskets that belong to this business
  componentDidMount() {
    var temp = 1
    var epochTime = (new Date).getTime()
    axios.get(`/api/basket/${temp}/${epochTime}`).then(res => {
      this.props.setBasket(res.data)
    })
  }

  render() {
    return (
      <div className="Business">
        <Header />
        <div className="bus-top-bar">
          <h1>Business Stats</h1>
        </div>
        <BusinessTable />
        <BusinessBasketList />
        <Footer />
      </div>
    );
  }
}

export default connect(null, {setBasket})(Business);