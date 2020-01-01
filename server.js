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

  // Set up the proxy.
  server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact')
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
    const {origin} = req.headers;
    const {text, email} = req.body;

    Mailer(
      email, 
      text, 
      origin,
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
