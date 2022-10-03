let config = require("../config.js");
let app = config.app;
app.set('view engine', 'ejs');

app.get('/name/:name', (req, res) => {

    let name = req.params.name;
    let age = req.query.age;

    res.render("nameage", {name: name, age: age})

});

app.get('/name/', (req, res) => {
    res.render(`unknow`);
});

app.listen(config.port, () => {
    console.log(`listen on [ip: ${config.ip}] - [port: ${config.port}]`);
});