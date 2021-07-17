import { useContextSelector } from 'use-context-selector'
import { UserContext } from 'contexts'

const useUserContext = () => {
  const user = useContextSelector(UserContext, ({ user }) => user)

  const updateUser = useContextSelector(
    UserContext,
    ({ updateUser }) => updateUser
  )

  return { user, updateUser }
}

export default useUserContext
