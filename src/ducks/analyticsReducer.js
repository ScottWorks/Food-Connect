const axios = require('axios');
const utilFunctions = require('../config/analyticsUtil');

const INITIAL_STATE = {
    landingTotalSavedByWeight: 0,
    loading: false
}

const GET_TOTAL_WEIGHT_SAVED = 'GET_TOTAL_WEIGHT_SAVED';

export function getTotalWeightSaved(){
    let total = axios.get('/api/statistics/baskets').then((baskets) => {
        return utilFunctions.sumTotalWeight(baskets.data)
    })


    return {
        type: GET_TOTAL_WEIGHT_SAVED,
        payload: total
    }
}



export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_TOTAL_WEIGHT_SAVED + '_PENDING':
        return Object.assign({}, state, {loading: true});

        case GET_TOTAL_WEIGHT_SAVED + '_FULFILLED':
        return Object.assign({}, state, {landingTotalSavedByWeight: action.payload, loading: false})

        default: 
         return state
    }
} 