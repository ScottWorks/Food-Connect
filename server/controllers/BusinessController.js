const axios = require('axios')

module.exports =  {
  getBusinessBaskets: (req, res) => {
    const db = req.app.get('db')
    const { businessID, epochTime } = req.params
    const business_id = businessID
    db.getBusinessBaskets([business_id, epochTime])
      .then(basket => res.status(200).send(basket[0]))
      .catch(() => res.status(500).send())
  },
  updateBusinessBasket: (req, res) => {

  },
  createBaskets: (req, res) => {
    const db = req.app.get('db')
    const { business_id, pick_up_time, status, items } = req.body
    console.log(business_id, pick_up_time, status, items)
    db.createBasket([business_id, pick_up_time, status, items])
      .then(newBasket => console.log('newBasket' + newBasket))
      .catch(() => res.status(500).send())
  },
  deleteBusinessBasket: (req, res) => {

  },


  
  getBusinessInfo: (req, res) => {

  },
  updateBusinessInfo: (req, res) => {

  }
}