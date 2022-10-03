const express = require('express')
const app = express()
const port = 4242

app.get('/', (req, res) => {
  res.send('Great ! It works.')
})

app.listen(port, () => {
  console.log(`port ${port}`)
})