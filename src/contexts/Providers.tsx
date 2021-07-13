import React from 'react'
import UserProvider from './UserProvider/UserProvider'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <UserProvider>{children}</UserProvider>
}

export default Providers
