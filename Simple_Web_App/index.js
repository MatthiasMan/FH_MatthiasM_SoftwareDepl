const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const appInsights = require('applicationinsights');


appInsights.setup('8029cdba-03e6-42a2-ba5f-033bb7819b7d').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
