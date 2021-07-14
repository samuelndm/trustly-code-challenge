import api from 'services/api'

export const getSneakers = (params = {}) => {
  return api.get(`sneakers/index.json`, {
    params: { ...params },
  })
}
