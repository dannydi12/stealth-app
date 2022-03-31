// Custom fetch script

export const mailman = async (endpoint: string, method: string, body?: any) => {
  const PORT = 8000
  
  const fetchConfig = {
    method,
    headers: { 
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  }

  const url = `${window.location.protocol}//${window.location.hostname}:${PORT}/${endpoint}`
  
  try {
    const response = await fetch(url, fetchConfig)
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
}
