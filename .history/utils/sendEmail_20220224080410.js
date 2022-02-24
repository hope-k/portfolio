import sendGrid from '@sendgrid/mail'

export const sendEmail = async ({ name, from, message }) => {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
    const messageReady = `${message} \n Email: ${from}`
    sendGrid.send({
        from: 'hopekumordzie@gmail.com',
        to: 'doyleannabel42@gmail.com',
        subject: `Portfolio Job From ${name}`,
        text: messageReady
    })

}


