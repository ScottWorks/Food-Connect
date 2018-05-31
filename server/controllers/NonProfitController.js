module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');
    const { currentLocalTime } = req.params;
    const { businessIDs } = req.body;

    db
      .getBaskets([currentLocalTime, businessIDs])
      .then((baskets) => {
        console.log(baskets);

        res.status(200).send(baskets);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
