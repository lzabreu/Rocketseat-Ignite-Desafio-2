import { Cart } from '../types/Cart'
import { ActionTypes } from './Actions'
import { produce } from 'immer'

interface CartState {
  cartList: Cart[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      {
        const itemToAddIndex = state.cartList.findIndex((cartItem) => {
          return cartItem.id === action.payload.item.id
        })
        return produce(state, (draft) => {
          if (itemToAddIndex < 0) {
            draft.cartList.push(action.payload.item)
          } else {
            draft.cartList[itemToAddIndex].quantity =
              action.payload.item.quantity
          }
        })
      }
      break
    case ActionTypes.DELETE_ITEM:
      {
        const newCartList = state.cartList.filter((cartItem) => {
          return cartItem.id !== action.payload.item.id
        })
        return produce(state, (draft) => {
          draft.cartList = newCartList
        })
      }
      break
    case ActionTypes.INCREASE_ITEM:
      const itemToIncreaseIndex = state.cartList.findIndex((cartItem) => {
        return cartItem.id === action.payload.item.id
      })
      return produce(state, (draft) => {
        if (itemToIncreaseIndex >= 0) {
          draft.cartList[itemToIncreaseIndex].quantity += 1
          console.log(draft.cartList[itemToIncreaseIndex].quantity)
        }
      })
      break
    case ActionTypes.DECREASE_ITEM:
      const itemToDecreaseIndex = state.cartList.findIndex((cartItem) => {
        return cartItem.id === action.payload.item.id
      })
      return produce(state, (draft) => {
        if (itemToDecreaseIndex >= 0) {
          draft.cartList[itemToDecreaseIndex].quantity -= 1
        }
      })
      break
    case ActionTypes.CLEAN_CART:
      return produce(state, (draft) => {
        draft.cartList = []
      })
     
      break
    default:
      return state
  }
}
