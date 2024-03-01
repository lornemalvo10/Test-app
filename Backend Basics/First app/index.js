require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('My twitter url')
})

app.listen(process.env.PORT, () => {
  console.log(`Example anpp listening on port ${port}`)
})