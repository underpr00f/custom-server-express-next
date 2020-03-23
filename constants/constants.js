/* eslint-disable operator-linebreak */
export const STATIC_URL = '/'

export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

export const linksArray = [
  { linkName: 'Main', linkValue: '/' },
  { linkName: 'Contact', linkValue: '/contact' },
  { linkName: 'B', linkValue: '/b' },
  { linkName: 'About', linkValue: '/about' },
]
