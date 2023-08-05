import { type Fetcher } from 'swr'
import axios from './axios'

export const getFetcher: Fetcher = async ({ url, params = {} }) => {
  const res = await axios.get(url, { params })
  return res.data
}

export const postFetcher: Fetcher = async ({ url, params = {} }) => {
  const res = await axios.post(url, { params })
  return res.data
}

export const patchFetcher: Fetcher = async ({ url, params = {} }) => {
  const res = await axios.patch(url, { params })
  return res.data
}
export const deleteFetcher: Fetcher = async ({ url, params = {} }) => {
  const res = await axios.delete(url, { params })
  return res.data
}
