import { Fetcher } from 'swr'
import axios from './axios'

export const fetcher: Fetcher = async (url: string) => {
  const res = await axios.get(url)
  return res.data
}
