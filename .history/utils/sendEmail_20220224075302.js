import sendGrid from '@sendgrid/mail'

export const sendEmail = async ({ name, from, message }) => {
    sendGrid.setApiKey(process.e)
    const messageReady = `${message} \n Email: ${from}`


