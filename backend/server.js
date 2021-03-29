const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY

app.post('/', (req, res) => {
    const query = req.body.query
    const url = `https://newsapi.org/v2/everything?q=${query}&en&apiKey=${API_KEY}`;

    axios({
        method: 'GET',
        url: url,
        responseType: 'application/json'
    })
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});