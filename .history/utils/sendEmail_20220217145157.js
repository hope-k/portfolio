import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        api_key: '438c2dfbd9c85267d2c293cf5616eab9-156db0f1-8fbf6ccf',
        domain: 'sandbox058258850d2d448aab11dcf25ad62480.mailgun.org'
    }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth))

export const sendEmail = async ({name, message, from }) => {
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
# Instantiate the client\
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR_API_V3_KEY';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
# Define the campaign settings\
emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = { "name": "From name", "email": "hopekumordzie@gmail.com" };
emailCampaigns.type = "classic";
# Content that will be sent\
htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',
# Select the recipients\
recipients: { listIds: [2, 7] },
# Schedule the sending in one hour\
scheduledAt: '2018-01-01 00:00:01'
}
# Make the call to the client\
apiInstance.createEmailCampaign(emailCampaigns).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
}, function (error) {
    console.error(error);
});
