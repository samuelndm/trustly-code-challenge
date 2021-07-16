import React from 'react'
import UserProvider from './UserProvider/UserProvider'
import CartProvider from './CartProvider/CartProvider'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}

export default Providers
