'use strict'

// let fs = require('fs');
let express = require('express');
let path = require('path');
let app = express();
let port = process.env.PORT || 8000;

let morgan = require('morgan');
let bodyParser = require('body-parser');

let friendsRouter = require('./router/friendsRouter');
let groupsRouter = require('./router/groupsRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public')));

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('short'));

console.log('hello');

app.use(friendsRouter);
app.use(groupsRouter);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
      console.log('hello');
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});

module.exports = app;
