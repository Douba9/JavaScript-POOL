let config = require("../config.js")
let app = config.app

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
  
app.listen(config.port, () => {
    console.log(`listen on [ip: ${config.ip}] - [port: ${config.port}]`)
})