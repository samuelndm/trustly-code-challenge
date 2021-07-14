import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import avatarMock from 'assets/images/avatar.png'

export type User = {
  name: string
  avatar?: string
}

export type UserContextType = {
  user: User
  updateUser: (user: User) => void
}

export type UserProviderProps = {
  children: React.ReactNode
}

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
