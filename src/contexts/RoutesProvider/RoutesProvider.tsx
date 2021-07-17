/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

type RoutesContextType = {
  meta: any
  updateMeta: (meta: any) => void
}

type RoutesProviderProps = {
  children: React.ReactNode
}

export const RoutesContext = createContext({} as RoutesContextType)

const RoutesProvider = ({ children }: RoutesProviderProps) => {
  const [meta, setMeta] = useState<any>({})

  const updateMeta = useCallback(
    (newMeta: any) => {
      setMeta(newMeta)
    },

    []
  )

  return (
    <RoutesContext.Provider
      value={{
        meta,
        updateMeta,
      }}
    >
      {children}
    </RoutesContext.Provider>
  )
}

export default RoutesProvider
