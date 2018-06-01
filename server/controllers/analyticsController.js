module.exports = {
    getAllCompletedBaskets : (req, res) => {
        
        const dbInstance = req.app.get('db');

        dbInstance.analytics_allBaskets().then((baskets) => {
            res.status(200).send(baskets)
        }).catch((err) => {
            console.log(`Error while fetching all baskets from DB: ${err}`);
            res.sendStatus(500);
        })
    },

    getBussinessCompletedBaskets : (req, res) => {
        
        const dbInstance = req.app.get('db');
        const {businessID} = req.params;

        dbInstance.analytics_businessBaskets([businessID]).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.log(`Error while fetching all baskets for a business: ${err}`);
            res.sendStatus(500);
        })
    }
}