const nodemailer = require('nodemailer');

// ایجاد یک Transporter برای Gmail
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure:true, // true for 465, false for other ports
    auth: {
        user: "artmanclass.suit2000@gmail.com",
        pass: "Hamid2000"
    }
});

const mailOptions = {
    from: 'artmanclass.suit2000@gmail.com',
    to: 'power22x@outlook.com',
    subject: 'Hamid reza',
    text: 'Plain text body',
    html: '<b>HTML body</b>' // You can use both text and html
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
