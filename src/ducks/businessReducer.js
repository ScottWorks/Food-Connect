import axios from 'axios'

const initialState = {
  items: [],
  pick_up_time: 0,
  baskets: [],
  currentBasketID: NaN,
  editingBasket: false
}

const SET_BASKETS = "SET_BASKETS",
      ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET",
      MAKE_BASKET = "MAKE_BASKET",
      SAVE_BASKET = "SAVE_BASKET",
      DELETE_BASKET = "DELETE_BASKET",
      EDIT_BASKET = "EDIT_BASKET",
      DELETE_ITEM = "DELETE_ITEM"

export function setBasket(baskets) {
  return {
    type: SET_BASKETS,
    payload: baskets
  }
}

export function addItemToBasket(item) {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: item
  }
}

export function makeBasket(obj) {
  let basketObj = axios.post('/api/basket', obj).then(res => {
    return res.data
  }).catch(e => console.log(e))
  return {
    type: MAKE_BASKET,
    payload: basketObj
  }
}

export function saveBasket(id, obj) {
  let basketObj = axios.put(`/api/basket/${id}`, obj).then(res => {
    return res.data
  }).catch(e => console.log(e))
  return {
    type: SAVE_BASKET,
    payload: basketObj
  }
}

export function deleteBasket(basketIdxID) {
  let index = axios.delete(`/api/basket/${basketIdxID.id}`).then(() => {
    return basketIdxID.index
  }).catch(e => console.log(e))
  return {
    type: DELETE_BASKET,
    payload: index
  }
}

export function editBasket(basketIdx) {
  return {
    type: EDIT_BASKET,
    payload: basketIdx
  }
}

export function deleteItem(itemIdx) {
  return {
    type: DELETE_ITEM,
    payload: itemIdx
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case SET_BASKETS:
      return Object.assign({}, state, {baskets: action.payload})

    case ADD_ITEM_TO_BASKET: 
      let { item, weight, FMV, pick_up_time } = action.payload
      let newItems = state.items.slice()
      newItems.unshift({
        item: item,
        weight: weight,
        FMV: FMV
      })
      return Object.assign({}, state, {
        items: newItems,
        pick_up_time: pick_up_time
      })

    case MAKE_BASKET + '_FULFILLED':
      var newMakeBasketsArr = state.baskets.slice()
      newMakeBasketsArr.push(action.payload)
      return Object.assign({}, state, {
        baskets: newMakeBasketsArr,
        items: [],
        pick_up_time: 0
      })

    case SAVE_BASKET + '_FULFILLED':
      var newSaveBasketsArr = state.baskets.slice()
      newSaveBasketsArr.push(action.payload)
      console.log(newSaveBasketsArr)
      return Object.assign({}, state, {
        baskets: newSaveBasketsArr,
        items: [],
        pick_up_time: 0,
        editingBasket: false
      })

    case DELETE_BASKET + '_FULFILLED':
      var newDeletedBasketsArr = state.baskets.slice()
      newDeletedBasketsArr.splice(action.payload, 1)
      return Object.assign({}, state, {baskets: newDeletedBasketsArr})

    case EDIT_BASKET: 
      if(!state.editingBasket) {
        var otherBaskets = state.baskets
        var selectedBasket = state.baskets[action.payload]
        otherBaskets.splice(action.payload, 1)
        console.log(JSON.stringify(selectedBasket))
        return Object.assign({}, state, {
          items: selectedBasket.items, 
          pick_up_time: selectedBasket.pick_up_time,
          editingBasket: true, 
          baskets: otherBaskets,
          currentBasketID: selectedBasket.basket_id
        })
      }

    case DELETE_ITEM:
      var deleteItemsArr = state.items.slice()
      deleteItemsArr.splice(action.payload, 1)
      return Object.assign({}, state, {items: deleteItemsArr})

    default: 
      return state
  }
} 