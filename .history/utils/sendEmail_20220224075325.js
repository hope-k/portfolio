import sendGrid from '@sendgrid/mail'

export const sendEmail = async ({ name, from, message }) => {
    sendGrid.setApiKey(process.env.SENDGRID_APIKEY)
    const messageReady = `${message} \n Email: ${from}`

}


