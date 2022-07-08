require('dotenv').config()
const express = require ('express')
const path = require('path')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {getReason, createReason, deleteReason} = require('./controller.js')

const app = express()

app.use(cors());
app.use(express.json());

app.post('/seed', seed)

app.get('/api/reason', getReason)
app.post('/api/reason', createReason)
app.delete('/api/reason/:id', deleteReason)


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
// })

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../styles.css'))
// })

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.js'))
// })

const port = process.env.PORT || 4005

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))