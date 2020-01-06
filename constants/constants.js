export const STATIC_URL = '/'

export const API_URL = () => {
  if (process.env.NODE_ENV === 'production') {
    return ''
  }
  return 'http://localhost:3000'
}
