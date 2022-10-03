var fs = require("fs");

var myMERN = {
    create: function (name) {
        fs.writeFile(name, 'utf8', function (err) {
            if (err) throw "Create " + name + " : KO";
            console.log("Create “" + name + "” : OK");
        });
    },

    read: function (name) {
        fs.readFile(name, 'utf8', (err, data) => {
            if (err) {
                console.log("Read “"+name+"” : KO");
                return;
            }
            console.log(data);
        });
    },

    update: function(name, content){

        fs.writeFile(name, content, (err) => {
            if(err){
                console.log("Update “"+name+"” : KO");
                return;
            }
            console.log("Update “"+name+"” : OK");

        });

    },

    delete: function(name){

        fs.rm(name, (err) => {
            if(err){
                console.log("Delete “"+name+"” : KO");
            }
            console.log("Delete “"+name+"” : OK");
        })

    }
}

module.exports = myMERN;