import nc from 'next-connect'
import { sendEmail } from '../../utils/sendEmail';


const handler = nc();


handler.post(async (req, res) => {
    try {
        const { email, name, message } = req.body
        await sendEmail({from: email, name: name, message: message})
        res.status(200).json({
            success: true
        })
    } catch (err) {
        console.log('Error ',err.message)
    }
})
export default handler;

