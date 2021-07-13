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
