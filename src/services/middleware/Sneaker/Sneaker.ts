import * as API_ENDPOINTS from 'services/endpoints'
import * as UTIL from 'utils'
import * as Messages from '../defaultMessages'

const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45] // This should have be in shoes properties

const addSizesProperty = (sneakers: UTIL.Types.Shoe[]) => {
  return sneakers?.map((sneaker: UTIL.Types.Shoe) => ({
    ...sneaker,
    sizes,
  }))
}

export const getSneakers = async (params = {}) => {
  try {
    const { data } = await API_ENDPOINTS.getSneakers(params)
    const sneakers = addSizesProperty(data?.results)
    return sneakers || []
  } catch (err) {
    console.error(err)
    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.message || Messages.ERROR.DEFAULT,
    })

    return []
  }
}
