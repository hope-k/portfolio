import sendGrid from '@sendgrid/mail'

export const sendEmail = async ({ name, from, message }) => {
    try {

        sendGrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
        const messageReady = `${message} \n Email: ${from}`
        sendGrid.send({
            from: 'hopekumordzie@gmail.com',
            to: 'officialhopek42@gmail.com',
            subject: `Portfolio Job From ${name}`,
            text: messageReady
        })
    }catch{
        console.log('Error: ',err.message)
    }
}


