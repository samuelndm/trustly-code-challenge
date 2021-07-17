/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import * as UTIL from 'utils'

type CartContextType = {
  cart: UTIL.Types.CartItem[]
  addItemToCart: (item: UTIL.Types.CartItem) => void
}

type CardProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

const CartProvider = ({ children }: CardProviderProps) => {
  const [cart, setCart] = useState<UTIL.Types.CartItem[]>([])

  const addItemToCart = useCallback(
    (newItem: UTIL.Types.CartItem) => {
      // setCart((prev) => [...prev, newItem]) // Cart is accepting only one for now

      setCart([newItem])
    },

    []
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
