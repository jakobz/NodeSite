var collections = ["todo"]
var mongo = require("mongojs")
var db = mongo.connect("localhost", collections)

exports.index = function(req, res){
  db.todo.find(function(err, items){
    res.render('index', { title: 'TODO List', items: items })
  })
};

exports.addItem = function(req, res) {
    var item = req.body.item
    item.checked = false
    db.todo.save(req.body.item, function() {
        res.render('todoItem', { item: item })
    }) 
}

exports.changeItem = function(req, res) {
    db.todo.update({_id: mongo.ObjectId(req.body.id)}, { $set: { checked : req.body.item.checked == "true" } })
}

exports.clearItems = function(req, res) {
    db.todo.remove({}, function() {
        res.json({ status: "ok"})        
    })
}