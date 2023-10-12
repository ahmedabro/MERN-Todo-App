import express from 'express'
import Connection from './database/db.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import route from './routes/routes.js';

const app = express()

app.use(cors())

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', route) // make sure that this line is below bodyParser because first you need to parse the json data then use it

const PORT = 8000;

Connection()

app.listen(PORT, () => {console.log(`Your server is running on port ${PORT}!`)})