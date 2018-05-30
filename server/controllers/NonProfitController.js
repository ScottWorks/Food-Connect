module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');

    db.getBaskets().then((baskets) => {
      res.status(200).send(baskets);
    });
  }
};
