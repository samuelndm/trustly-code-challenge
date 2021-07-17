import * as UTIL from 'utils'
import onlineBankingBanner from 'assets/images/banner-online-banking.png'
import cardPaymentBanner from 'assets/images/banner-card-payment.png'
import applePayBanner from 'assets/images/banner-apple-pay.png'

export const paymentsData = [
  {
    id: '1',
    title: 'Online Banking',
    isAvailable: true,
    banner: onlineBankingBanner,
    discount: {
      value: 10,
      currency: UTIL.Enums.CurrencyCodes['USD'],
    },
  },
  {
    id: '2',
    isAvailable: false,
    title: 'Card payment',
    banner: cardPaymentBanner,
    discount: {
      value: 0,
      currency: UTIL.Enums.CurrencyCodes['USD'],
    },
  },
  {
    id: '3',
    isAvailable: false,
    title: 'Apple pay',
    banner: applePayBanner,
    discount: {
      value: 0,
      currency: UTIL.Enums.CurrencyCodes['USD'],
    },
  },
]
