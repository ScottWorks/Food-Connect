import axios from 'axios'

const initialState = {
  items: [],
  pick_up_time: 0,
  baskets: [],
  currentBasketID: NaN
}

const SET_BASKETS = "SET_BASKETS",
      ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET",
      MAKE_BASKET = "MAKE_BASKET",
      SAVE_BASKET = "SAVE_BASKET"

export function setBasket(baskets) {
  return {
    type: SET_BASKETS,
    payload: baskets
  }
}

export function addItemToBasket(item) {
  let newItems = state.items
  newItems.unshift(item)
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: newItems
  }
}

export function makeBasket() {
  let basketObj = {
    business_id: 1, //Change this!!!
    pick_up_time: state.pick_up_time,
    status: 0,
    items: JSON.stringify(state.items)
  }
  let baskets = axios.post('/api/basket', basketObj).then(res => {
    return [res.data, ...state.baskets]
  }).catch(e => console.log(e))
  return {
    type: MAKE_BASKET,
    payload: baskets
  }
}

export function saveBasket() {
  let basketObj = {
    business_id: 1, //Change this!!!
    pick_up_time: state.pick_up_time,
    status: 0,
    items: JSON.stringify(state.items)
  }
  let baskets = axios.put(`/api/basket/${state.currentBasketID}`, basketObj).then(res => {
    return [res.data, ...state.baskets]
  }).catch(e => console.log(e))
  return {
    type: SAVE_BASKET,
    payload: baskets
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case SET_BASKETS:
      return Object.assign({}, state, {baskets: action.payload})

    case ADD_ITEM_TO_BASKET: 
      return Object.assign({}, state, {items: action.payload})

    case MAKE_BASKET + "_FULFILLED":
      return Object.assign({}, state, {baskets: action.payload})

    case SAVE_BASKET + "_FULFILLED":
      return Object.assign({}, state, {baskets: action.payload})

    default: 
      return state
  }
} 