let config = require("../config.js")
let app = config.app

app.get('/', (req, res) => {
  res.send('Great ! It works.')
})

app.listen(config.port, () => {
  console.log(`port ${config.port}`)
})