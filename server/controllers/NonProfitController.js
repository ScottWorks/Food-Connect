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
  updateBasket: (req, res) => {
    const db = req.app.get('db');
    const { nonProfitID } = req.params;
    const { scheduledTime, status, basketID } = req.body;

    db
      .np_updateBasket([nonProfitID, scheduledTime, status, basketID])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
