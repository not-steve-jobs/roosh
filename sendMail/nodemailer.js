require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'roosh@internet.ru',
            pass: process.env.EMAIL_PASSWORD
        }
    },
    {
        from: 'mailer test <roosh@internet.ru>'
    }
);

exports.mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        return  console.log('Email sent:', info)
    })
}

