const axios = require('axios')

module.exports = {
    
    getUserInfo: () => axios.get('/api/nonprofit/9')
        .then( (userData) => userData.data
            ).catch( err => 'error'),

    displayBusinessToMap: () => axios.post('/api/nonprofit/businesslocation', {businessId: [1,2,3,4]})
        .then( locations => {
            locations.data
        }).catch( err => 'error'),
    
    wishListPromise: () => axios.get('/api/wishlist/9')
        .then( wishlist => {
        wishlist.data
    }).catch( err => 'error'),

    schedulePromise: () => axios.get('/api/scheduled/baskets/9')
        .then( scheduledPickup => {
            scheduledPickup.data
        }).catch( err => 'error'),
    
    confirmPickup: () => axios.get('/api/basket/confim/11')
        .then( baskets => {
            baskets.data
        }).catch( err => 'error')
}