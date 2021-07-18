const express = require('express')
const API = require('call-of-duty-api')({ platform: "all" });
const login = require('./bot')
require('./bot.js')

const app = express()
const port = process.env.PORT || 3000

app.get('', async (req, res) => {
    res.send("Hello, I'm a Warzone bot")
})

app.listen(port, () => {
    login()
    console.log('Server is up on port: ' + port)
})