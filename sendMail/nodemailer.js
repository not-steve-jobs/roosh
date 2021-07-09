const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'raphael99@ethereal.email',
            pass: 'ZvAwk2bNC3TsguMDUU'
        }
    },
    {
        from: 'mailer test <raphael99@ethereal.email>'
    }
);

exports.mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        return  console.log('Email sent:', info)
    })
}

