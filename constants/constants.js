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

export const sliderArray = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1573740701893-c74cda780677?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    text: 'Race',
    description: 'Race desc',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1573906648850-d5835ef91e3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    text: 'Cruze',
    description: 'Cruze desc',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1571467463071-0ccfb478dc71?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    text: 'Mercedes',
    description: 'Mercedes desc',
  },
]
