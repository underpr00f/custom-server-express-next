import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
})

export const Mailer = (email:string, text:string, origin:string|undefined|string[], cb:any) => {
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

// module.exports = Mailer
