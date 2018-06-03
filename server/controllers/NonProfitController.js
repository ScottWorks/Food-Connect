module.exports = {
  getScheduledBaskets: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;

    db
      .np_getScheduledBaskets([nonProfitID])
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

    db
      .np_getBaskets([currentLocalTime, businessIDs])
      .then((baskets) => {
        res.status(200).send(baskets);
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

    db
      .np_scheduleBasket([nonProfitID, scheduledTime, status, basketID])
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

    db
      .np_cancelBasket([status, basketID])
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

    db
      .np_getWishList([nonProfitID])
      .then((wishlist) => {
        res.status(200).send(wishlist);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
  addWishListItem: (req, res) => {
    const db = req.app.get('db');
    const { updatedWishList } = req.body;
    const { nonProfitID } = req.params;

    console.log(JSON.stringify(updatedWishList));

    db
      .np_addWishListItem([JSON.stringify(updatedWishList), nonProfitID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
