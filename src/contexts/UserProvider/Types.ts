export type User = {
  name: string
  avatar?: string
}

export type userContextType = {
  user: User
  updateUser: (user: User) => void
}

export type UserProviderProps = {
  children: React.ReactNode
}
