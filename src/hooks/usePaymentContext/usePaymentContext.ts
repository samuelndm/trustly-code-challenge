import { useContextSelector } from 'use-context-selector'
import { PaymentContext } from 'contexts'

const usePaymentContext = () => {
  const payments = useContextSelector(
    PaymentContext,
    ({ payments }) => payments
  )

  const updatePayments = useContextSelector(
    PaymentContext,
    ({ updatePayments }) => updatePayments
  )

  const selectedPayment = useContextSelector(
    PaymentContext,
    ({ selectedPayment }) => selectedPayment
  )

  const updateSelectedPayment = useContextSelector(
    PaymentContext,
    ({ updateSelectedPayment }) => updateSelectedPayment
  )

  return { payments, updatePayments, selectedPayment, updateSelectedPayment }
}

export default usePaymentContext
