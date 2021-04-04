const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const router = require('./routes/index.js')

const app = express()

dotenv.config()


const port = process.env.PORT || 4000

app.use(bodyParser.json()) // Permet de lire le corps des requêtes, notamment POST, PUT et PATCH

app.use('/api/v1', router)

if (true) {
  app.use(express.static(__dirname+'/../static/'))

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/../static/index.html')
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
