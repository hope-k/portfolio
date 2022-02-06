import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        api_key: '438c2dfbd9c85267d2c293cf5616eab9-156db0f1-8fbf6ccf',
        domain: 'sandbox058258850d2d448aab11dcf25ad62480.mailgun.org'
    }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth))

export const sendEmail = async ({from, message }) => {
    nodemailerMailgun.sendMail({
        from: from,
        to: 'officialhopek42@gmail.com',
        subject: 'PORTFOLIO JOB',
        
    })
}



