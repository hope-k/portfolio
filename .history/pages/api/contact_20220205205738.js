import nc from 'next-connect'

const handler = nc();


handler.post((req, res) => {
    const {email, name, message} = req.body
})

