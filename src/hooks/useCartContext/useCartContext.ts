import { useContextSelector } from 'use-context-selector'
import { CartContext } from 'contexts'

const useCartContext = () => {
  const cart = useContextSelector(CartContext, ({ cart }) => cart)

  const addItemToCart = useContextSelector(
    CartContext,
    ({ addItemToCart }) => addItemToCart
  )

  return { cart, addItemToCart }
}

export default useCartContext
