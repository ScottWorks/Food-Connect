const axios = require('axios')

module.exports =  {
  getBusinessBaskets: (req, res) => {
    const db = req.app.get('db')
    const { businessID, epochTime } = req.params
    const business_id = businessID
    db.getBusinessBaskets([business_id, epochTime])
      .then(basket => res.status(200).send(basket))
      .catch(() => res.status(500).send())
  },
  updateBusinessBasket: (req, res) => {
    const db = req.app.get('db')
    const { basketID } = req.params
    const basket_id = basketID
    const { business_id, pick_up_time, status, items } = req.body
    db.updateBusinessBasket([basket_id, business_id, pick_up_time, status, items])
    .then(basket => res.status(200).send(basket[0]))
    .catch(() => res.status(500).send())
  },
  createBaskets: (req, res) => {
    const db = req.app.get('db')
    const { business_id, pick_up_time, status, items } = req.body
    db.createBasket([business_id, pick_up_time, status, items])
      .then(newBasket => res.status(200).send(newBasket[0]))
      .catch(() => res.status(500).send())
  },
  deleteBusinessBasket: (req, res) => {
    const db = req.app.get('db')
    const { basketID } = req.params
    const basket_id = basketID
    db.deleteBusinessBasket([basket_id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },

  
  getBusinessInfo: (req, res) => {

  },
  updateBusinessInfo: (req, res) => {

  }
}