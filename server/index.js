const express = require('express');
const cloudinary = require('cloudinary').v2
const app = express()
require('dotenv').config()
require('./config.js')

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.get('/post', (req, res) => {
    cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
        { public_id: "olympic_flag" },
        function (error, result) { res.send(result); });
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
