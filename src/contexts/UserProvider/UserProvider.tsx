import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { User, UserContextType, UserProviderProps } from './Types'
import avatarMock from 'assets/images/avatar.png'

export const UserContext = createContext({} as UserContextType)

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    avatar: avatarMock,
  })

  const updateUser = useCallback((newUser: User) => {
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
