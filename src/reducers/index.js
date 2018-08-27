import {
  EDIT_CITY_FROM,
  EDIT_CITY_TO,
  INCREASE_LUGGAGE_AMOUNT,
  DECREASE_LUGGAGE_AMOUNT,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM
} from '../actions/types'

const initialStore = {
  cityFrom: '',
  cityTo: '',
  luggageAmount: 0,
  orders: []
}

export const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case EDIT_CITY_FROM:
      return { ...state, cityFrom: action.payload }

    case EDIT_CITY_TO:
      return { ...state, cityTo: action.payload }

    case INCREASE_LUGGAGE_AMOUNT:
      return { ...state, luggageAmount: action.payload }

    case DECREASE_LUGGAGE_AMOUNT:
      return { ...state, luggageAmount: action.payload }

    case ADD_ORDER_ITEM:
      return { ...state, orders: [...state.orders, action.payload] }

    case REMOVE_ORDER_ITEM:
      const item = action.payload
      const prevOrders = state.orders
      const newOrders = prevOrders.filter(order => order.id !== item.id)

      return { ...state, orders: newOrders }

    default:
      return state
  }
}
