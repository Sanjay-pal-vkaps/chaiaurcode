require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World is show again!')
})

app.get('/profile', (req, res) => {
    res.send('Sanju')
  console.log(process.env.PORT) 

  })

  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})