var collections = ["test"]
var db = require("mongojs").connect("localhost", collections)

exports.index = function(req, res){
  db.test.find(function(err, items){
    res.render('index', { title: 'TODO List', items: items })
  })
};

exports.addItem = function(req, res) {
    console.log("addItem")
    console.log(req)
    var result = { state: "ok" }
    res.writeHead(200, {'content-type':'text/json'})
    res.end(JSON.stringify(result))
}