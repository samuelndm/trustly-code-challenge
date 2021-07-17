import * as API_ENDPOINTS from 'services/endpoints'
import * as UTIL from 'utils'
import * as Messages from '../defaultMessages'

export const getPayments = async () => {
  try {
    const response = await API_ENDPOINTS.getPayments()

    return response || []
  } catch (err) {
    console.error(err)
    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.message || Messages.ERROR.DEFAULT,
    })

    return []
  }
}
