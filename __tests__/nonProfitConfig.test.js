let fns = require('../src/config/nonProfitTestConfig');
const getType = require('jest-get-type')


test('Axios request should return user data', () => {
        return fns.getUserInfo()
        .then( res => {
            expect(res.length).toBeGreaterThanOrEqual(1)
        })
});


test('Axios request should return array of business location data', () => {
    return fns.displayBusinessToMap()
    .then( res => {
        expect(res.length).toBeGreaterThanOrEqual(1)
    })
});

test('Axios request should return array of wishlist data', () => {
    return fns.wishListPromise()
        .then( res => {
            expect(res.length).toBeGreaterThanOrEqual(1)
        })
})

test('Axios reguest should return array of scheduled pickup-data', () => {
    return fns.schedulePromise()
        .then( res => {
            expect(res.length).toBeGreaterThanOrEqual(0)
        })
})

test('Axios request should return array of baskets', () => {
    return fns.confirmPickup()
        .then( res => {
            expect(res.length).toBeGreaterThanOrEqual(1)
        })
})

// describe('test one', () => {
//     test('check for condos', () => {
//         return fns.getAllCondos()
//         .then(res => {
//             expect(res.length).toBeGreaterThan(0)
//         })
//     })
//  })