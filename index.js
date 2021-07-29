// const express = require('express')
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

/*app.get('/', (req,res) => {
    res.end("Hello Everyone")
})*/

app.use(bodyParser.json())
app.listen(3000, () => {
    console.log(`Listening at http://localhost:${port}`)
})