import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
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
}



var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR_API_V3_KEY';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = ({ name, from, message }) => {
    new SibApiV3Sdk.CreateEmailCampaign({
        name: "Hope Kumordzie",
        subject: `PORTFOLIO JOB FROM ${name}`,
        sender: { "name": "From name", "email": '<noreply@hopek.com>' },
        type: "classic",

        htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',
        recipients: 'officialhopek42@gmail.com',
        scheduledAt: Date.now()
    }

    )
};


apiInstance.createEmailCampaign(emailCampaigns)
