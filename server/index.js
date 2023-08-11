const express = require('express');
const app = express()
require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.post('/post', async(req, res) => {
        const body = req.body
        // Use the uploaded file's name as the asset's public ID and 
        // allow overwriting the asset with new versions\
        console.log(body)
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
        };


        try {
            // Upload the image
            const result = await cloudinary.uploader.upload(body.imagePath, options);
            console.log(result);
            res.send(result.public_id);
        } catch (error) {
            console.error(error);
        }
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
