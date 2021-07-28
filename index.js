const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.end("Hello Everyone")
})

app.listen(3000, () => {
    console.log(`Listening at http://localhost:${port}`)
})