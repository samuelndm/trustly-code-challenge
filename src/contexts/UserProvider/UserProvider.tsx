import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

type User = {
  name: string
  avatar: string
}

type userContextType = {
  user: User
  updateUser: (user: User) => void
}

type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext({} as userContextType)

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    avatar: '',
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
