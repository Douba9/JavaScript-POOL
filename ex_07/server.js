let config = require("../config.js");
let app = config.app;
let myMERN = require("./myMERN_module");

app.get("/files/:name", (req, res) => {
    let name = req.params.name;
    myMERN.read(name);
});

app.post("/files/:name", (req, res) => {
    let name = req.params.name;
    myMERN.create(name);
});

app.get("/files/:name/:content", (req, res) => {

    let name = req.params.name;
    let content = req.params.content;

    myMERN.update(name, content);
});

app.get("/files/:name", (req, res) => {

    let name = req.params.name;
    myMERN.delete(name);

});

app.listen(config.port, () => {
    console.log(`listen on [ip: ${config.ip}] - [port: ${config.port}]`);
});