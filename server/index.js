require('dotenv').config()
const express = require ('express')
const path = require('path')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {getReason, createReason, deleteReason} = require('./controller.js')

const app = express()

app.use(cors());
app.use(express.json());


app.get('/reason', getReason)
app.post('/reason', createReason)
app.delete('/reason/:id', deleteReason)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.js'))
})

app.get('/html1', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/distraction.html'))
})
app.get('/css1', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/distraction.css'))
})
app.get('/js1', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/distraction.js'))
})

app.get('/html2', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/about.html'))
})
app.get('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/about.js'))
})

app.get('/html3', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/reasons.html'))
})
app.get('/js3', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/reasons.js'))
})
app.get('/css3', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/reasons.css'))
})

app.get('/html4', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/skills.html'))
})
app.get('/js4', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/skills.js'))
})

app.get('/html5', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/support.html'))
})
app.get('/js5', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/support.js'))
})

app.get('/html6', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/to-breathe.html'))
})
app.get('/js6', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/to-breathe.js'))
})

app.get('/html7', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/worry-list.html'))
})
app.get('/js7', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/worry-list.js'))
})

app.get('/js8', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/controller.js'))
})

const port = process.env.PORT || 4005

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))