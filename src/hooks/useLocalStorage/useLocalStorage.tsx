/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react'

const useLocalStorage = (key: string, defaultValue: any = null) => {
  const storageValue = localStorage.getItem(key)
  const initialValue = storageValue ? JSON.parse(storageValue) : null
  const [value, setValue] = useState(initialValue)

  const updatingValue = useCallback(
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      return setValue(newValue)
    },
    [key]
  )

  const removingValue = useCallback(() => {
    localStorage.removeItem(key)
    return setValue(null)
  }, [key])

  useEffect(() => {
    if (defaultValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue))
      setValue(defaultValue)
    }
  }, [key, defaultValue])

  return [
    value,
    (value: any) => updatingValue(value),
    () => removingValue(),
  ] as const
}

export default useLocalStorage
