// const express = require('express')
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const port = 3000;

/*app.get('/', (req,res) => {
    res.end("Hello Everyone")
})*/

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req,res)=> {
    console.log("home-log");
    res.send("Homepage")
})
app.listen(3000, () => {
    console.log(`Listening at http://localhost:${port}`)
})