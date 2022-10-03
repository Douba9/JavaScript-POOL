var fs = require("fs");

var myMERN = {
    create: function (name) {
        fs.writeFile(name, 'utf8', function (err) {
            if (err) throw "Create " + name + " : KO";
            return "Create “" + name + "” : OK";
        });
    },

    read: function (name) {
        fs.readFile(name, 'utf8', (err, data) => {
            if (err) {
                return "Read “"+name+"” : KO";
                return;
            }
            return data;
        });
    },

    update: function(name, content){

        fs.writeFile(name, content, (err) => {
            if(err){
                return "Update “"+name+"” : KO";
                return;
            }
            return "Update “"+name+"” : OK";

        });

    },

    delete: function(name){

        fs.rm(name, (err) => {
            if(err){
                return "Delete “"+name+"” : KO";
            }
            return "Delete “"+name+"” : OK";
        })

    }
}

module.exports = myMERN;