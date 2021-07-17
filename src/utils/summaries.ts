import * as UTIL from 'utils'

export const getAddressSummary = (address: UTIL.Types.Address) => {
  const summary = `${address?.name}<br/>Phone no: ${address?.phone}<br/>Address: ${address?.address}`
  return summary
}

export const getShoeSummary = (
  purchaseDetails: UTIL.Types.ShoePurchaseDetails
) => {
  const summary = `x ${purchaseDetails?.quantity} ${purchaseDetails?.color} Size ${purchaseDetails?.size}<br/>Item #${purchaseDetails?.id}`
  return summary
}
