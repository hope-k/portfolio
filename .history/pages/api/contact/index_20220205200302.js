import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        api_key: 'key-1234123412341234',
        domain: 'one of your domain names listed at your https://app.mailgun.com/app/sending/domains'
    }
}