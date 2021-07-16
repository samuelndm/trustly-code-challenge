import * as UTIL from 'utils'

export const validadePurchaseDetails = (
  purchaseDetails: UTIL.Types.ShoePurchaseDetails
) => {
  if (!purchaseDetails) {
    throw new Error('Purchase Details is invalid.')
  }
}

export const validateSize = (
  purchaseDetails: UTIL.Types.ShoePurchaseDetails,
  shoe: UTIL.Types.Shoe
) => {
  const minSize = shoe?.sizes[0]
  const maxSize = shoe?.sizes[shoe?.sizes?.length - 1]

  if (purchaseDetails.size < minSize || purchaseDetails.size > maxSize) {
    throw new Error('Size is invalid')
  }
}

export const validateQuantity = (
  purchaseDetails: UTIL.Types.ShoePurchaseDetails
) => {
  if (
    purchaseDetails.quantity <= 0 ||
    purchaseDetails.quantity > UTIL.Constants.MAX_AMOUNT_SHOES_TO_BUY
  ) {
    throw new Error('Quantity is invalid.')
  }
}

const isPurchaseDetailsValid = (
  purchaseDetails: UTIL.Types.ShoePurchaseDetails,
  shoe: UTIL.Types.Shoe
) => {
  try {
    validadePurchaseDetails(purchaseDetails)
    validateSize(purchaseDetails, shoe)
    validateQuantity(purchaseDetails)

    return true
  } catch (err) {
    console.error(`Validations.Shoe.isPurchaseDetailsValid - ${err}`)
    UTIL.Notifications.createDangerNotification({
      message: err?.message || err,
    })

    return false
  }
}

export default isPurchaseDetailsValid
