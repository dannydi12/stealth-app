/* eslint-disable max-len */
import { getAuth } from 'firebase/auth'
import { stringify } from 'query-string'

export const mailman = async (
  endpoint: string, method: string, body?: any, auth?: string, query?: object,
  ) => {
  const PORT = 8000

  const authToken = await getAuth().currentUser?.getIdToken()
  
  const fetchConfig = {
    method,
    headers: { 
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth || `Bearer ${authToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  }

  const stringifiedQuery = stringify(query || {})

  // const url = `${window.location.protocol}//${window.location.hostname}:${PORT}/${endpoint}${query ? `?${stringifiedQuery}` : ''}`
  const server = process.env.REACT_APP_SERVER_URL || ''
  const url = `${server}/${endpoint}${query ? `?${stringifiedQuery}` : ''}`

  try {
    const response = await fetch(url, fetchConfig)
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
}
