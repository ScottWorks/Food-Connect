const bcrypt = require('bcryptjs')
const axios = require('axios')

module.exports = {
    register: async (req, res, next) => {
        const { 
            organizationType, organizationName, specificType, 
            streetAddress, city, statee, zip, firstName, lastName, 
            phoneNumber, latitude, longitude, userName, pw, fein, 
            operating_hours } = req.body
        const db = req.app.get('db')

        let group;
        if (organizationType === 'non-profit') {
            group = await db.register_np([organizationName, streetAddress, city, statee, zip, phoneNumber, latitude, longitude, specificType, firstName, lastName, fein])
            // .then( group => {
            //     res.status(200).send(group.data)
            //     console.log("We created a non-profit!")
            // })
            console.log('New np added to DB!', group)

           await db.check_username([userName]).then(user => {
                if (user.length !== 0) {
                    res.status(409).send('Username taken. Please choose another, and try again.')

                } else {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = bcrypt.hashSync(pw, salt)

                    db.register_np_admin([userName, hash, group[0].non_profit_id]).then(user => {
                        res.status(200).send("User Created")
                    })
                }
            })

        }

        if (organizationType === 'business') {
            group = await db.register_business([organizationName, streetAddress, city, statee, zip, phoneNumber, latitude, longitude, specificType, firstName, lastName, fein, operating_hours])
            // .then( group => {
            //     console.log("We created a new business!")
            //     res.status(200).send(group.data)
            // })
            console.log('New business added to DB!')

           await db.check_username([userName]).then(user => {
                if (user.length !== 0) {
                    console.log('Please choose a different username.')
                    res.status(200).send('Username taken. Please choose another, and try again.')

                } else {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = bcrypt.hashSync(pw, salt)

                    db.register_business_admin([userName, hash, group[0].business_id]).then(user => {
                        console.log('Business user created!')
                    })
                }
            })

        }

    },
    login: (req, res, next) => {
        let err = 'Default Err'
        const { userName, pw } = req.body;
        const db = req.app.get('db');


        db.check_username([userName]).then( user => {
            if(user.length !== 0) {
                const validpassWord = bcrypt.compareSync(pw, user[0].user_pw)
                if(validpassWord === true && user[0].acct_type === false) {
                    req.session.user.user_id = user[0].user_id;
                    req.session.user.acct_type = 'np';
                    req.session.user.acct_id = user[0].non_profit_id
                    res.status(200).send('You are also the chosen one!')
                }
                  else if (validpassWord === true && user[0].acct_type === true) {
                    req.session.user.user_id = user[0].user_id;
                    req.session.user.acct_type = 'b';
                    req.session.user.acct_id = user[0].business_id
                    res.status(200).send("You are the chosen one!")
                } else {
                    res.status(401).send("Wrong Password")
                }
              }
              else if(user.length === 0){
                res.status(401).send('Please create an account before logging in.')
              }
            }
        ).catch(err)
    },
    validate: (req, res, next) => {
        let user = req.session.user
        if(req.session.user.user_id) {
            res.status(200).send(user)
        } else {
        res.status(401).send( 'You are not Authorized')
        }
    },
    logout: (req, res, next) => {
        req.session.destroy()
        res.status(200).send()
    }
}


