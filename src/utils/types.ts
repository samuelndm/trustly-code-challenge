import * as UTIL from 'utils'

export type Maybe<T> = T | null

export type Shoe = {
  id: string
  description: string
  color: string
  price: string
  currency: UTIL.Enums.CurrencyCodes
  thumbnailURL: string
  maxresURL: string
  sizes: number[]
}

export type ShoePurchaseDetails = {
  size: number
  quantity: number
}
