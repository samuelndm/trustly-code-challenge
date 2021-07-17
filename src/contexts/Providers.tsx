import React from 'react'
import UserProvider from './UserProvider/UserProvider'
import CartProvider from './CartProvider/CartProvider'
import RoutesProvider from './RoutesProvider/RoutesProvider'
import PaymentsProvider from './PaymentsProvider/PaymentsProvider'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <RoutesProvider>
      <UserProvider>
        <CartProvider>
          <PaymentsProvider>{children}</PaymentsProvider>
        </CartProvider>
      </UserProvider>
    </RoutesProvider>
  )
}

export default Providers
