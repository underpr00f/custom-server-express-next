const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
})

const Mailer = (email, text, origin, cb) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: email, // list of receivers
    subject: process.env.EMAIL_SUBJECT, // Subject line
    text: `${ text } from ${ origin }`, // plain text body
    html: `Got message <b>${ text }</b> from <b>${ origin }</b>`, // html body
  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('err', err)
      cb(err, null)
    } else {
      cb(null, data)
    }
  })
}

module.exports = Mailer
