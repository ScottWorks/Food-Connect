import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setBasket } from '../../../ducks/businessReducer'
import BusinessTable from './BasketTable/BasketTable'
import BusinessBasketList from './BusinessBasketList/BusinessBasketList'
import Header from'../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Business.css'
import Donut from '../../components/Stats/Donut';
import StatChart from '../../components/Stats/StatChart'

class Business extends React.Component {
  constructor(props){
    super(props);

    this.state={
      hideChart: true
    }

    this.checkIfMobile = this.checkIfMobile.bind(this);
  }

  componentDidMount = async () => {

    await axios.get('/api/auth/me').then( user => {
      if(typeof user.data.user_id === 'number' && user.data.acct_type === 'b') {
        console.log('Validated!', user)
      } else if (typeof user.data.user_id === 'number' && user.data.acct_type === 'np') {
        window.location.assign('/#/nonprofit')
      } else {
        window.location.assign('/#/login')
        console.log('Sorry, you are not allowed...')
      }
  }).catch( err => {
    console.log(err)
    window.location.assign('/#/login')
    console.log('Sorry, you are not allowed...')
  })

    var temp = 1
    axios.get(`/api/basket/${temp}/${(new Date).getTime()}`).then(res => {
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

    return (
      <div className="Business">
        <Header />
        <div className="bus-top-bar">
        {
          this.state.hideChart ? null : (
            <div className='donut-container'>
            <Donut/>
          </div>)}

          {
            this.state.hideChart ? null : (
              <div className='barchart-container'>
            <StatChart/>
          </div>   
            )
          }
        </div>
        <div className='business-table-list-container'>
          <BusinessTable className='business-table-container'/>
          <BusinessBasketList className='business-basket-list-container'/>
        </div>
      </div>
    );
  }
}

export default connect(null, {setBasket})(Business);