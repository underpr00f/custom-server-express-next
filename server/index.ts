import express, {Request, Response} from 'express'
const nextserv = require('next')
// import { Mailer } from '../utils/Mailer'
// const Mailer = require('../utils/Mailer')

const yourPort = process.env.PORT && parseInt(process.env.PORT, 10)
const port = yourPort || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = nextserv({ dev })
const handle = app.getRequestHandler()

require('dotenv').config()

// Mailer from utils file
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
})
const Mailer = (email:string, text:string, origin:string|undefined|string[], cb:any) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: email, // list of receivers
    subject: process.env.EMAIL_SUBJECT, // Subject line
    text: `${text} from ${origin}`, // plain text body
    html: `Got message <b>${text}</b> from <b>${origin}</b>`, // html body
  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log('err', err)
      cb(err, null)
    } else {
      cb(null, data)
    }
  })
}

interface Error {
  status?: number;
  message?: string;
}

app.prepare().then(() => {
  const server = express()

  // Set up the proxy.
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    )
    next()
  })

  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  server.get('/contact', (req, res) => app.render(req, res, '/contact'))

  server.get('/b', (req, res) => app.render(req, res, '/b'))
  server.get('/about', (req, res) => app.render(req, res, '/about'))
  // server.get('/people', (req, res) => app.render(req, res, '/people'))
  // server.get('/people/:id', (req, res) => {
  //   app.render(req, res, '/people/[id]', { id: req.params.id })
  // })
  server.get('/posts/:id', (req, res) => {
    app.render(req, res, '/posts', { id: req.params.id })
  })
  server.post('/api/contact-email', (req, res) => {
    // Mailer util
    const { origin } = req.headers
    const { text, email } = req.body
    Mailer(email, text, origin, (err:Error, data:any) => {
      if (err) {
        res.status(500).json({ message: '500 - Internal error' })
      } else {
        res.status(200).json({ message: '200 - Message sent', data })
      }
    })
  })
  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err:Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
