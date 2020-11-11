const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const appInsights = require('applicationinsights');
appInsights.setup('afd42de7-5ea1-4a25-8ce6-c7f18f48a896').start();

app.get('/', (req, res) => {
  res.status(200).json('Hello World!')
})

module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
