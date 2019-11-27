const router = require('express').Router();
//email config
const nodemailer = require('nodemailer');


router.post('/send', (req, res) => {
    const body = req.body;
    const message = body.message;
    console.log('body ', body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secureConnection: false,
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.CODE,
        },
       /* tls: {
            rejectUnauthorized: false
        }*/
    });

    const mailOptions = {
        from: 'foksman083@gmail.com',
        to: 'krik13333@gmail.com',
        subject: 'portfolio email',
        text: `\n Name: ${message.name}, \n Company: ${message.company}, \n Phone: ${message.phone}, \n Email: ${message.email}, \n Message: ${message.message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json('email was send')
        }
    });
});

module.exports = router;