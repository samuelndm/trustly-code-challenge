/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as UTIL from 'utils'

export type Maybe<T> = T | null

export type Address = {
  name: string
  phone: string
  address: string
}

export type User = {
  name: string
  avatar?: string
  mainAddress: Address
  addressList: Address[]
}

export type CartItem = {
  purchaseDetails: {
    id: string
    quantity: number
    totalCost: number
    [prop: string]: any
  }
  purchaseSummary: string
  product: {
    id: string
    description: string
    price: string
    currency: UTIL.Enums.CurrencyCodes
    thumbnailURL?: string
    maxresURL?: string
    [prop: string]: any
  }
}

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
  id: string
  quantity: number
  size: number
  color: string
}

export type Payment = {
  id: string
  isAvailable: boolean
  title: string
  banner: string
  discount: {
    value: number
    currency: UTIL.Enums.CurrencyCodes
  }
}
