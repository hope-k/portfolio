import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

/*const auth = {
    auth: {
        api_key: '438c2dfbd9c85267d2c293cf5616eab9-156db0f1-8fbf6ccf',
        domain: 'sandbox058258850d2d448aab11dcf25ad62480.mailgun.org'
    }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth))

export const sendEmail = async ({ name, message, from }) => {
    const messageReady = `${message} \n Email: ${from}`
    await nodemailerMailgun.sendMail({
        from: 'hopek <noreply@hopek.com>',
        to: 'officialhopek42@gmail.com',
        subject: `PORTFOLIO JOB FROM ${name}`,
        text: messageReady

    })
}*/





export const sendEmail = async ({ name, from, message }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "username",
            pass: "password",
        },
    });
    const messageReady = `${message} \n Email: ${from}`
    sendSmtpEmail = {
        name: "Hope Kumordzie",
        subject: `PORTFOLIO JOB FROM ${name}`,
        sender: { email: 'hopekumordzie@gmail.com' },
        to: { email: 'officialhopek42@gmail.com' },
        textContent: messageReady,
    }


};


