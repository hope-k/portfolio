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



const SibApiV3Sdk = require('sib-api-v3-sdk');
var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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'
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

const sendEmail = async ({ name, from, message }) => {
    const messageReady = `${message} \n Email: ${from}`
    SendSmtpEmail = {
        name: "Hope Kumordzie",
        subject: `PORTFOLIO JOB FROM ${name}`,
        sender: { email: '<noreply@hopek.com>' },
        type: "classic",
        to: { email: 'offcialhopek42@gmail.com' },
        textContent: messageReady,
    }

    )
    apiInstance.sendTransacEmail(sendSmtpEmail)
};


