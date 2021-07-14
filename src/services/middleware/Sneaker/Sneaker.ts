import * as API_ENDPOINTS from 'services/endpoints'
import * as UTIL from 'utils'
import * as Messages from '../defaultMessages'

export const getSneakers = async (params = {}) => {
  try {
    const { data } = await API_ENDPOINTS.getSneakers(params)
    return data || []
  } catch (err) {
    console.error(err)
    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.status_message || Messages.ERROR.DEFAULT,
    })

    return {}
  }
}
