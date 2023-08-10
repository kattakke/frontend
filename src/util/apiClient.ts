import api from '~/api/$api.ts'
import aspida from '@aspida/fetch'

const apiClient = api(aspida(fetch, { baseURL: import.meta.env.VITE_BASE_URL }))

export default apiClient
