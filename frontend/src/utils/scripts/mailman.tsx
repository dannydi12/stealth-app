/* eslint-disable max-len */
import { Http, HttpResponse } from '@capacitor-community/http'
import firebase from 'firebase'
import { stringify } from 'query-string'

export const mailman = async (
  endpoint: string, method: string, body?: any, auth?: string, query?: object,
  ) => {
  const PORT = 8000

  const fAuth = firebase.auth()
  const authToken = await fAuth.currentUser?.getIdToken()
  const stringifiedQuery = stringify(query || {})
  // const url = `${window.location.protocol}//${window.location.hostname}:${PORT}/${endpoint}${query ? `?${stringifiedQuery}` : ''}`
  const server = 'https://crosswalk-345817.uc.r.appspot.com'
  const url = `${server}/${endpoint}${query ? `?${stringifiedQuery}` : ''}`
  
  const fetchConfig = {
    method,
    headers: { 
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth || `Bearer ${authToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  }

  try {
   // const response: HttpResponse = await Http.get(fetchConfig)
    const response = await fetch(url, fetchConfig)
    const data = response.json()

    return await data
  } catch (err) {
    return console.log(err)
  }
}
