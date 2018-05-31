module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');
    // const currentTime = new Date().getTime();

    console.log(currentTime);

    db
      .getBaskets([currentTime])
      .then((baskets) => {
        res.status(200).send(baskets);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
};
