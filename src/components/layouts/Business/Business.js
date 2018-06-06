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

  componentDidMount() {
    var temp = 1
    axios.get(`/api/basket/${temp}/${(new Date).getTime()}`).then(res => {
      this.props.setBasket(res.data)
    })
  }

  render() {
    return (
      <div className="Business">
        <Header />
        <div className="bus-top-bar">

        </div>
        <BusinessTable />
        <BusinessBasketList />
        <Footer />
      </div>
    );
  }
}

export default connect(null, {setBasket})(Business);