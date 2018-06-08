module.exports = {
    validateCredentials: async (req, res, next) => {
        if (+req.params.nonProfitID === +req.session.user.acct_id) {
            next();
        } else {
            res.status(500).send('Somethings not right...')
        }
    }
}