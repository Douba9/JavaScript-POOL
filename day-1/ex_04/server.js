let config = require("../config.js");
let app = config.app;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("");
});

app.get(`/name/:name`, (req, res) => {

    let name = req.params.name;
    res.render(`name`, {name: name});

});

app.get('/name/', (req, res) => {
    res.render(`name`, {name: "unknown"});
});
  
app.listen(config.port, () => {
    console.log(`listen on [ip: ${config.ip}] - [port: ${config.port}]`);
});