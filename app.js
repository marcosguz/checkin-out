const express = require('express')
const { registerRouter } = require('./routes/register.route')

const app = express()

app.use(express.json())

app.use('/api/v1/registers', registerRouter)

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exits`
    })
})

module.exports = { app }