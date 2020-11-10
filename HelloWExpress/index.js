
const appInsights = require('applicationinsights');
appInsights.setup('046300d4-5ea1-43e9-858c-4d8265a570d4').start();
const express = require('express')
const app = express()
const port = 3000
module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/', (req, res) => {
  res.status(200).json({ str: 'Hello World!'});;
})
