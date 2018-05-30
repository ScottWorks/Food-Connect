module.exports = {
  getBaskets: (req, res) => {
    const db = req.app.get('db');
    // const currentTime = Date.now()/1000;
    const currentTime = 1527647630;

    console.log(currentTime);

    db.getBaskets([currentTime]).then((baskets) => {
      console.log(baskets);
      res.status(200).send(baskets);
    });
  }
};
