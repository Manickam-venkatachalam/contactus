const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html');
});
app.post('/', (req, res) => {
    // Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;





    let transporter = nodemailer.createTransport(
        `smtps://${process.env.EMAIL}:${process.env.PASSWORD}@smtp.gmail.com`
    );

    // Setup email settings
    let mailOptions = {
        from: '<noreply@example.com>',
        to: 'manickamawsacc@gmail.com',
        subject: req.body.subject,
        html: output
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.render('MESSAGE SEND FAILED');
        }

        res.render('MESSAGE SEND SUCCESS');
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));