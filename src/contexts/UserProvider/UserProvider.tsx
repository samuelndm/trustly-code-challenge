import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import * as UTIL from 'utils'
import avatarMock from 'assets/images/avatar.png'

type UserContextType = {
  user: UTIL.Types.User
  updateUser: (user: UTIL.Types.User) => void
}

type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

const addressMock = {
  name: 'John Smith',
  phone: '01312428200',
  address: 'Redwood City, 2000',
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UTIL.Types.User>({
    name: '',
    avatar: avatarMock,
    mainAddress: addressMock,
    addressList: [addressMock],
  })

  const updateUser = useCallback((newUser: UTIL.Types.User) => {
    setUser(newUser)
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
