const Mailer = require('../../../utils/Mailer')

export default (req, res) => {
    if (req.method === 'POST') {
        const {text, email} = req.body;
        const {origin} = req.headers;
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
    } else {
        res.status(405).json({message: "405 - Method Not Allowed"})
    }
}