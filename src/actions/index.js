import {
  EDIT_CITY_FROM,
  EDIT_CITY_TO,
  INCREASE_LUGGAGE_AMOUNT,
  DECREASE_LUGGAGE_AMOUNT,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM
} from './types'

export const editCityFrom = cityFrom => ({ type: EDIT_CITY_FROM, payload: cityFrom })
export const editCityTo = cityTo => ({ type: EDIT_CITY_TO, payload: cityTo })
export const increaseLuggageAmount = value => ({ type: INCREASE_LUGGAGE_AMOUNT, payload: value })
export const decreaseLuggageAmount = value => ({ type: DECREASE_LUGGAGE_AMOUNT, payload: value })
export const addOrderItem = order => ({ type: ADD_ORDER_ITEM, payload: order })
export const removeOrderItem = order => ({ type: REMOVE_ORDER_ITEM, payload: order })
