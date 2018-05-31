module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');
    const { currentLocalTime } = req.params;

    console.log(currentLocalTime);

    db
      .getBaskets([currentLocalTime])
      .then((baskets) => {
        res.status(200).send(baskets);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
