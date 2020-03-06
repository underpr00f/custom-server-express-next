import { NextApiRequest, NextApiResponse } from 'next'
const Mailer = require('../../../utils/Mailer')

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { text, email } = req.body
    const { origin } = req.headers
    
    Mailer(email, text, origin, (err:any, data:any) => {
      console.log(err, data)
      if (err) {
        res.status(500).json({ message: '500 - Internal error' })
      } else {
        res.status(200).json({ message: '200 - Message sent', data })
      }
    })
  } else {
    res.status(405).json({ message: '405 - Method Not Allowed' })
  }
}
