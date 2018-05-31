module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');
    // const currentTime = Date.now();
    const currentTime = 1500000000000;

    console.log(currentTime);

    db.getBaskets([currentTime]).then((baskets) => {
      console.log(baskets);
      res.status(200).send(baskets);
    });
  }
};
