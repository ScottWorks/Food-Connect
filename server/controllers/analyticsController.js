module.exports = {
    getAllCompletedBaskets : (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.analytics_allBaskets().then((baskets) => {
            res.status(200).send(baskets)
        }).catch((err) => {
            console.log(`Error while fetching all baskets from DB: ${err}`);
            res.sendStatus(500);
        })
    }
}