
// const client = require('twilio')(accountSid, authToken);


const Whatsapp = (req, res) => {
    try {
        //     client.messages
        // .create({
        //     body: 'Your appointment is coming up on July 21 at 3PM',
        //     from: 'whatsapp:+14155238886',
        //     to: 'whatsapp:+919159157377'
        // })
        // .then(message => console.log(message.sid))
        // .done(); 

    } catch (err) {
        return res.status(500).json({
            success: false,
            result: null,
            message: Array.isArray(err.message) ? err.message[0].msg : err.message
        })

    }
}




module.exports = { Whatsapp }