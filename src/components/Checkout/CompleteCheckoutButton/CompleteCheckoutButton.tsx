import React, { useEffect } from 'react'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'

const CompleteCheckoutButton = () => {
  const { cart } = Hooks.useCartContext()
  const [paymentStatus, proceedPayment] = Hooks.usePayWithMyBank()

  const handleClick = () => {
    proceedPayment({
      amount: cart?.[0]?.purchaseDetails?.totalCost || 0,
      currency: cart?.[0]?.product?.currency || '',
    })
  }

  const handlePaymentStatus = (paymentStatus: string) => {
    switch (paymentStatus) {
      case UTIL.Constants.PAYMENT_STATUS.SUCCEED:
        UTIL.Notifications.createSuccessNotification({
          message: 'Purchase made successfully!',
        })
        break
      case UTIL.Constants.PAYMENT_STATUS.FAILED:
        UTIL.Notifications.createDangerNotification({
          message: 'There was an error during payment!',
        })
        break

      default:
        break
    }
  }

  useEffect(() => {
    handlePaymentStatus(paymentStatus)
  }, [paymentStatus])

  return <S.Container onClick={handleClick}>Continue</S.Container>
}

export default CompleteCheckoutButton
