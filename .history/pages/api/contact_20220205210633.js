import nc from 'next-connect'
import { sendEmail } from '../../utils/sendEmail';


const handler = nc();


handler.post((req, res) => {
    try {
        const { email, name, message } = req.body
        console.log(email)

    } catch (err) {
        console.log(err.message)
    }
})

