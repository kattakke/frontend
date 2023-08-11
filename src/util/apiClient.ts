import api from '~/api/$api.ts'
import aspida from '@aspida/fetch'

const apiClient = api(
  aspida(undefined, {
    baseURL: import.meta.env.VITE_BASE_URL,
    throwHttpErrors: true,
  })
)

export default apiClient
