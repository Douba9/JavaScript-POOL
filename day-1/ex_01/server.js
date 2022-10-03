const express = require('express')
const app = express()
const port = 4242

app.listen(port, () => {
  console.log(`port ${port}`)
})