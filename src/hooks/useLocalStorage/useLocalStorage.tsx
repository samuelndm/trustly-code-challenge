import { useState, useEffect, useCallback } from 'react'

// eslint-disable-next-line
const useLocalStorage = (key: string, newValue?: any) => {
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
    if (newValue) {
      localStorage.setItem(key, JSON.stringify(newValue))
      setValue(newValue)
    }
  }, [key, newValue])

  return [value, (value: any) => updatingValue(value), () => removingValue()] // eslint-disable-line
}

export default useLocalStorage
