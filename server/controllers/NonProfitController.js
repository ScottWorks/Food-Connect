module.exports = {

  getBusinessLoation: (req, res, next) => {
    const db = req.app.get('db');
    const {businessID} = req.body;

    db.np_getBusinessLocation([businessID]).then( locations => {
      res.status(200).send(locations)
    }).catch( (err) => {
      res.sendStatus(500)
    })
  },

  getUserInfo: (req, res, next) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;
    
    console.log('param', +req.params.nonProfitID, 'session', req.session.user)
    db.np_getUserInfo([nonProfitID])
      .then(
        (userInfo) => {
          res.status(200).send(userInfo);
        },
        (userInfo) => console.log(userInfo)
      )
      .catch(() => {
        res.sendStatus(500);
      });
  },

  getScheduledBaskets: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;

    db.np_getScheduledBaskets([nonProfitID])
      .then((scheduledBaskets) => {
        res.status(200).send(scheduledBaskets);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  getBaskets: (req, res) => {
    const db = req.app.get('db');
    const { currentLocalTime } = req.params;
    const { businessIDs } = req.body;
    console.log(businessIDs)

    db.np_getBaskets([currentLocalTime, businessIDs])
      .then((baskets) => {
        console.log(baskets)
        res.status(200).send(baskets);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  confirmBasket: (req, res) => {
    const db = req.app.get('db');
    const { basketID } = req.params;
    const status = 1;

    db.np_confirmPickup([status, basketID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  scheduleBasket: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;
    const { scheduledTime, basketID } = req.body;
    const status = 2;
    db.np_scheduleBasket([nonProfitID, scheduledTime, status, basketID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  cancelBasket: (req, res) => {
    const db = req.app.get('db');
    const { basketID } = req.params;
    const status = 0;

    db.np_cancelBasket([status, basketID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  getWishList: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;

    db.np_getWishList([nonProfitID])
      .then((wishlist) => {
        res.status(200).send(wishlist);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  createWishList: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;

    db.np_createWishList([nonProfitID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  modifyWishList: (req, res) => {
    const db = req.app.get('db');
    const { updatedWishList } = req.body;
    const { nonProfitID } = req.params;

    db.np_modifyWishList([JSON.stringify(updatedWishList), nonProfitID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
