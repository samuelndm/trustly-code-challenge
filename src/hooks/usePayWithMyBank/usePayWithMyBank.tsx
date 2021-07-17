/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import * as UTIL from 'utils'

declare global {
  interface Window {
    PayWithMyBank: any
  }
}

const pwmbURL = process.env.REACT_APP_PWMB_URL
const pwmbAccessId = process.env.REACT_APP_PWMB_ACCESS_ID
const pwmbMerchantId = process.env.REACT_APP_PWMB_MERCHANT_ID
const pwmbMerchantReference = process.env.REACT_APP_PWMB_MERCHANT_REFERENCE
const myEmail = process.env.REACT_APP_MY_EMAIL

type PurchaseType = {
  amount: number
  currency?: string
}

const PayWithMyBankOptions = {
  closeButton: false,
  dragAndDrop: true,
  widgetContainerId: 'widget',
}

const returnUrl = '#receipt'
const cancelUrl = '#checkout'

const usePayWithMyBank = () => {
  const [purchase, setPurchase] = useState<PurchaseType>()
  const [paymentStatus, setPaymentStatus] = useState('')

  const proceedPayment = (purchase: any) => {
    setPurchase(purchase)
    setPaymentStatus('')
  }

  const handleBankWidget = (purchase: PurchaseType) => {
    const establishData = {
      accessId: pwmbAccessId,
      merchantId: pwmbMerchantId,
      metadata: { demo: 'enabled' },
      currency: `${purchase?.currency || 'USD'}`,
      paymentType: 'Deferred',
      amount: purchase?.amount?.toFixed(2) || '0.00',
      description: myEmail,
      merchantReference: pwmbMerchantReference,
      returnUrl,
      cancelUrl,
    }

    window.PayWithMyBank.establish(establishData, PayWithMyBankOptions)
  }

  const handlePanelListener = () => {
    window.PayWithMyBank.addPanelListener((command: any, event: any) => {
      if (event) {
        if (command === 'event' && event.type === 'new_location') {
          if (event.data.indexOf(returnUrl) === 0) {
            setPaymentStatus(UTIL.Constants.PAYMENT_STATUS.SUCCEED)
          } else {
            setPaymentStatus(UTIL.Constants.PAYMENT_STATUS.FAILED)
          }
        }
      }
    })
  }

  useEffect(() => {
    if (purchase) {
      const script = document.createElement('script')
      script.src = `${pwmbURL}?accessId=${pwmbAccessId}`
      script.async = true
      script.onload = () => {
        handleBankWidget(purchase)
        handlePanelListener()
      }

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [purchase])

  return [
    paymentStatus,
    (purchase: PurchaseType) => proceedPayment(purchase),
  ] as const
}

export default usePayWithMyBank
