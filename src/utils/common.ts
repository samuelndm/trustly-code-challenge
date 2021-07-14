/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as UTIL from 'utils'

export const isExternalUrl = (url?: string) => {
  const regex = /http:|https:|www\./g
  return regex.test(url || '')
}

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const createArray = (size: number, type?: string) => {
  let children
  const array = []

  switch (type?.trim().toLowerCase()) {
    case 'object':
      children = {}
      break
    case 'string':
      children = ''
      break
    default:
      children = null
      break
  }

  if (size && Number.isInteger(size)) {
    for (let i = 0; i < size; i++) {
      array.push(children)
    }
  }

  return array
}

export const createArrayOfGivenNumber = (
  number: number,
  reverse?: boolean | string
) => {
  if (number && Number.isInteger(number)) {
    const tmpPages = []

    if (reverse) {
      for (let i = number - 1; i >= 0; i--) {
        tmpPages.push(i)
      }
    } else {
      for (let i = 0; i < number; i++) {
        tmpPages.push(i)
      }
    }
    return tmpPages
  }
  return []
}

export const resizeArray = (array: any[], maxAmount: number) => {
  const newArray: any[] = []

  if (array?.length && Number.isInteger(maxAmount)) {
    array.forEach((item, index) => {
      if (index < maxAmount) {
        newArray.push(item)
      }
    })
  }

  return newArray
}

export const removeArrayDuplicatesByKey = (
  array: any[],
  Key: string | number
) => {
  const newArray: any[] = []
  const tempObject: any = {}

  if (array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      if (!tempObject[item[Key]]) {
        newArray.push(item)
        tempObject[item[Key]] = item[Key]
      }
    }
  }

  return newArray
}

export const normalizeString = (string: string) => {
  let newString = ''
  if (string) {
    newString = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
  return newString
}

export const formatCurrency = (
  value: number,
  locationCode: UTIL.Enums.LocationCodes,
  currencyCode: UTIL.Enums.CurrencyCodes
) => {
  return new Intl.NumberFormat(locationCode || 'pt-BR', {
    style: 'currency',
    currency: currencyCode || 'BRL',
  }).format(value)
}

export const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const ScrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight || document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

export const updateUrlParamByKey = (
  search: any,
  key: string,
  newValue: string | number
) => {
  const params = search?.split('?')?.[1]?.split('&') || []
  let hasFound = false

  const newParams = params.map((param: string) => {
    const paramKey = param?.split('=')?.[0]
    if (paramKey === key) {
      hasFound = true
      return `${key}=${newValue}`
    }
    return param
  })

  if (!hasFound) {
    newParams.push(`${key}=${newValue}`)
  }

  return `?${newParams?.join('&') || ''}`
}

export const removeUrlParamByKey = (search: any, key: string) => {
  const params = search?.split('?')?.[1]?.split('&') || []

  const newParams = params.filter((param: string) => {
    const paramKey = param?.split('=')?.[0]
    return paramKey !== key
  })

  return `?${newParams?.join('&') || ''}`
}

export const removeElementsAttrByQuery = (query: any, attr: string) => {
  const elements = document.querySelectorAll(query)

  elements.forEach((element) => {
    element?.removeAttribute(attr)
  })
}

export const splitParagraphs = (text: string) => {
  return text?.match(/[^\r\n]+/g) || []
}
