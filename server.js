const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('dotenv').config()

const Mailer = require('./utils/Mailer')

app.prepare().then(() => {
  const server = express()

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a')
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b')
  })
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about')
  })
  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })
  server.post('/api/contact-email', (req, res) => { 
    // Mailer util
    const {text, email} = req.body;

    Mailer(
      email, 
      text, 
      function(err,data) {
        if (err) {
          res.status(500).json({message: "500 - Internal error"})          
        } else {
          res.status(200).json({message: "200 - Message sent"})
        }
      }
    )  
  });
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
