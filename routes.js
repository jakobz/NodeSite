var collections = ["test"]
var db = require("mongojs").connect("localhost", collections);

exports.index = function(req, res){
  db.test.save({name: "test Name"});
  db.test.find(function(err, items){
    res.render('index', { title: 'TODO List', items: items });
  })
};