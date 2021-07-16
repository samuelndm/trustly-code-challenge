/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

export type CartItem = {
  purchaseDetails: any
  product: any
}

type CartContextType = {
  cart: CartItem[]
  addItemToCart: (item: CartItem) => void
}

type CardProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

const CartProvider = ({ children }: CardProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addItemToCart = useCallback(
    (newItem: CartItem) => {
      setCart((prev) => [...prev, newItem])
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
