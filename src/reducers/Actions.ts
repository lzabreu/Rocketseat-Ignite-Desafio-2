import { Cart } from '../types/Cart'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  DECREASE_ITEM = 'DECREASE_ITEM',
  INCREASE_ITEM = 'INCREASE_ITEM',
  CLEAN_CART = 'CLEAN_CART',
}
export function addItemToCartAction(item: Cart) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function increaseItemToCartAction(item: Cart) {
  return {
    type: ActionTypes.INCREASE_ITEM,
    payload: {
      item,
    },
  }
}

export function decreaseItemToCartAction(item: Cart) {
  return {
    type: ActionTypes.DECREASE_ITEM,
    payload: {
      item,
    },
  }
}

export function deleteItemFromCartAction(item: Cart) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      item,
    },
  }
}
export function cleanCartAction(cart:Cart[]) {
  return {
    type: ActionTypes.CLEAN_CART,
    payload: {
      cart,
    },
  }
}
