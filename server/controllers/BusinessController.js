const axios = require('axios')

module.exports = {
  getBusinessBaskets: (req, res) => {
    const db = req.app.get('db')
    const { businessID, epochTime } = req.params
    const business_id = businessID
    console.log(business_id, epochTime)
    db.getBusinessBaskets([business_id, epochTime])
      .then(basket => res.status(200).send(basket[0]))
      .catch(() => res.status(500).send())
  },
  updateBusinessBasket: (req, res) => {

  },
  createBaskets: (req, res) => {
    const db = req.app.get('db')
    const { items, scheduled_time, business_id } = req.body
    db.getBaskets([business_id, items, scheduled_time])
      .then(user => res.status(200).send(user[0]))
      .catch(() => res.status(500).send())
  },
  deleteBusinessBasket: (req, res) => {

  },


  
  getBusinessInfo: (req, res) => {

  },
  updateBusinessInfo: (req, res) => {

  }
}