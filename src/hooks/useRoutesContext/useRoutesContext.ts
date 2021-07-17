import { useContextSelector } from 'use-context-selector'
import { RoutesContext } from 'contexts'

const useRoutesContext = () => {
  const meta = useContextSelector(RoutesContext, ({ meta }) => meta)

  const updateMeta = useContextSelector(
    RoutesContext,
    ({ updateMeta }) => updateMeta
  )

  return { meta, updateMeta }
}

export default useRoutesContext
