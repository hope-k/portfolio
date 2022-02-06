import nc from 'next-connect'
impor


const handler = nc();


handler.post((req, res) => {
    try {
        const { email, name, message } = req.body

    } catch (err) {
        console.log(err.message)
    }
})

