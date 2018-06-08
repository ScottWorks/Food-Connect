import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import flatten from 'lodash/flatten'
import Header from '../../../components/Header/Header'
import './BusinessHistory.css'

class BusinessHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      allItems: [],
      totalWeight: 0,
      totalFMV: 0
    }
  }

  componentDidMount() {
    var temp = 1
    var itemArrFlat = []
    axios.get(`/api/all/basket/${temp}`).then(res => {
      for (let i = 0; i < res.data.length; i++) {
        let itemArr = res.data[i].items.slice()
        itemArrFlat.push(itemArr)
      }
      let totalWeight = 0
      let totalFMV = 0
      let itemArr = _.flatten([...itemArrFlat])
      for(let i = itemArr.length - 1; i >= 0; i--) {
        itemArr[i].item = this.itemNameConverter(itemArr[i].item)
        for(let j = 0; j < itemArr.length; j++) {
          itemArr[j].item = this.itemNameConverter(itemArr[j].item)
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
    })
  }

  itemNameConverter(str) {
    let myStr = str.toUpperCase()
    if (myStr.indexOf(' ') === -1) {
      if(myStr[myStr.length - 1] !== 'S') {
        return myStr + 'S'
      }
    }
    return myStr
  }

  render() {
    var displayAllItems = this.state.allItems.map(e => {
      return (
        <div className="BusinessHistory-item-row">
          <div className="BusinessHistory-column">
            <p>{e.item}</p>
          </div>
          <div className="BusinessHistory-column">
            <p>{e.weight}</p>
          </div>
          <div className="BusinessHistory-column">
            <p>{e.FMV}</p>
          </div>
        </div>
      )
    })
    
    return (
      <div>
        <Header />
        <div 
          className="BusinessHistory"
          id="section-to-print"
        >
          <div className="BusinessHistory-print-button">
            <h1>Non-Profit Donations 2018</h1>
            <button
              onClick={() => window.print()}
            >Print</button>
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
              <p>{this.state.totalWeight}</p>
            </div>
            <div className="BusinessHistory-column">
              <p>{this.state.totalFMV}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessHistory