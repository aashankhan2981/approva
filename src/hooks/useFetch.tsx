import useSWR from 'swr'
import { BackendUrl } from '../constants'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

//const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useCheckApplication = (id, filter) => {
  let query_builder = ""
  for (const [key, value] of Object.entries(filter)) {
    query_builder += `${key}=${value}&`
  }
  const request_url = `${BackendUrl}/application/checker/${id}?${query_builder}`

  const { data, error } = useSWR(request_url, fetcher)

  return {
    data: data,
    loading: !error && !data,
    error: error
  }
}





