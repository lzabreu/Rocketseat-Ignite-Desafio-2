import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/CartReducer'
import {
  addItemToCartAction,
  cleanCartAction,
  deleteItemFromCartAction,
} from '../reducers/Actions'

import { Cart } from '../types/Cart'
import { increaseItemToCartAction } from '../reducers/Actions'
import { decreaseItemToCartAction } from '../reducers/Actions'

interface Props {
  children: ReactNode
}

interface CartContextType {
  cartList: Cart[]
  itemsValue: number
  totalItems: number
  addToCart: (item: Cart) => void
  increaseQuantity: (cartItem: Cart) => void
  decreaseQuantity: (cartItem: Cart) => void
  deleteFromCart: (cartItem: Cart) => void
  cleanCartList:()=>void
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: Props) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartList: [],
    },
    (initialState) => {
      const storageStateJSON = localStorage.getItem(
        '@coffee-shop:cart-state-1.0.0'
      )
      if (storageStateJSON) {
        return JSON.parse(storageStateJSON)
      }
      return initialState
    }
  )
  const { cartList } = cartState

  useEffect(() => {
    localStorage.setItem(
      '@coffee-shop:cart-state-1.0.0',
      JSON.stringify(cartState)
    )
  }, [cartState])

  const itemsValue = cartList.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  },0)

  const totalItems = cartList.length

  function addToCart(item: Cart) {
    dispatch(addItemToCartAction(item))
  }
  function deleteFromCart(cartItem: Cart) {
    dispatch(deleteItemFromCartAction(cartItem))
  }
  function increaseQuantity(cartItem: Cart) {
    dispatch(increaseItemToCartAction(cartItem))
  }
  function decreaseQuantity(cartItem: Cart) {
    dispatch(decreaseItemToCartAction(cartItem))
  }
  function cleanCartList(){
    dispatch(cleanCartAction(cartList))

  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        totalItems,
        itemsValue,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
        cleanCartList
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
