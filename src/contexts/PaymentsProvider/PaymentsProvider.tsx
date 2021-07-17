import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import * as UTIL from 'utils'
import * as API from 'services/middleware'

type PaymentsContextType = {
  payments: UTIL.Types.Payment[]
  updatePayments: (payments: UTIL.Types.Payment[]) => void
  selectedPayment: UTIL.Types.Payment
  updateSelectedPayment: (payment: UTIL.Types.Payment) => void
}

type PaymentsProviderProps = {
  children: React.ReactNode
}

export const PaymentContext = createContext({} as PaymentsContextType)

const PaymentsProvider = ({ children }: PaymentsProviderProps) => {
  const [payments, setPayments] = useState<UTIL.Types.Payment[]>([])
  const [selectedPayment, setSelectedPayment] = useState<UTIL.Types.Payment>(
    payments[0]
  )

  const updatePayments = useCallback((newPayments: UTIL.Types.Payment[]) => {
    setPayments(newPayments)
  }, [])

  const updateSelectedPayment = useCallback(
    (newPayment: UTIL.Types.Payment) => {
      setSelectedPayment(newPayment)
    },
    []
  )

  const loadPayments = async () => {
    const response = await API.getPayments()
    setPayments(response)
    setSelectedPayment(response[0])
  }

  useEffect(() => {
    loadPayments()
  }, [])

  return (
    <PaymentContext.Provider
      value={{
        payments,
        updatePayments,
        selectedPayment,
        updateSelectedPayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentsProvider
