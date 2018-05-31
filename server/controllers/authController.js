const bcrypt = require('bcryptjs')
const axios = require('axios')

module.exports = {
    register: async (req, res, next) => {
        const { organizationType, organizationName, specificType, streetAddress, city, statee, zip, firstName, lastName, phoneNumber, userName, pw } = req.body
        const db = req.app.get('db')

        let group;
        if(organizationType === 'non-profit') {
            group = await db.register_np([organizationName, streetAddress, city, statee, zip, phoneNumber, specificType, firstName, lastName ])
            // .then( group => {
            //     res.status(200).send(group.data)
            //     console.log("We created a non-profit!")
            // })
            console.log('New np added to DB!', group)
        }

        if(organizationType === 'business') {
            group = await db.register_business([organizationName, streetAddress, city, statee, zip, phoneNumber, specificType, firstName, lastName])
            // .then( group => {
            //     console.log("We created a new business!")
            //     res.status(200).send(group.data)
            // })
            console.log('New business added to DB!')
        }
        // db.check_users([username]).then( user => {
        //     if(user.length !== 0)
        //     console.log('Please choose a different username.')
        //     res.status(200).send('Username taken. Please choose another, and try again.')
        // })

    }
}


