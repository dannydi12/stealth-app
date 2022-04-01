import { getAuth } from 'firebase/auth'

export const mailman = async (endpoint: string, method: string, body?: any, auth?: string) => {
  const PORT = 8000

  const authToken = getAuth().currentUser?.getIdToken()
  
  const fetchConfig = {
    method,
    headers: { 
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth || `Bearer ${authToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  }

  const url = `${window.location.protocol}//${window.location.hostname}:${PORT}/${endpoint}`
  
  try {
    console.log(endpoint, method, body)

    const response = await fetch(url, fetchConfig)
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
}
