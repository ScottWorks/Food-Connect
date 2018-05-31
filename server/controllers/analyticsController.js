module.exports = {
    getAllCompletedBaskets : (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.analytics_allBaskets().then((baskets) => {
            res.status(200).send(baskets)
        })
    }
}