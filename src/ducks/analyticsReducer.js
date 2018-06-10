const axios = require('axios');
const utilFunctions = require('../config/analyticsUtil');

const INITIAL_STATE = {
    landingTotalSavedByWeight: 0,
    businessBaskets: [],
    loading: false
}

const GET_TOTAL_WEIGHT_SAVED = 'GET_TOTAL_WEIGHT_SAVED';
const GET_BUSINESS_BASKET_COMPLETED = 'GET_BUSINESS_BASKET_COMPLETED';

export function getTotalWeightSaved(){
    let total = axios.get('/api/statistics/baskets').then((baskets) => {
        return utilFunctions.sumTotalWeight(baskets.data)
    })
    
    return {
        type: GET_TOTAL_WEIGHT_SAVED,
        payload: total
    }
};

export function getBusinessBasketsCompleted(businessID) {
    let baskets = axios.get(`/api/all/basket/${businessID}`).then((baskets) => {
        return baskets.data
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })

    return {
        type: GET_BUSINESS_BASKET_COMPLETED,
        payload: baskets
    }
}



export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_TOTAL_WEIGHT_SAVED + '_PENDING':
        return Object.assign({}, state, {loading: true});

        case GET_TOTAL_WEIGHT_SAVED + '_FULFILLED':
        return Object.assign({}, state, {landingTotalSavedByWeight: action.payload, loading: false});

        case GET_BUSINESS_BASKET_COMPLETED + '_PENDING':
        return Object.assign({}, state, {loading: true});

        case GET_BUSINESS_BASKET_COMPLETED + '_FULFILLED':
        return Object.assign({}, state, {businessBaskets: action.payload, loading: false})

        default: 
         return state
    }
} 