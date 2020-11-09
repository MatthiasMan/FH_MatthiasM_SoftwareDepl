
const express = require('express')
const app = express()
const port = 3000
module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/', (req, res) => {
  res.status(200).json({ str: 'Hello World!'});;
})
//s