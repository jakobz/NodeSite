
/**
 * Module dependencies.
 */

var express = require('express')
var http = require('http')
var path = require('path');

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


var app = express();
var db = require("mongojs").connect("localhost", ["users"])

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render("index", { title: "Home"})
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    db.users.find({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/asdasdasd',
                                   failureRedirect: '/',
                                   failureFlash: false })
);


require('./todo')(app)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
