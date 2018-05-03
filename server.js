const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

let public = require('./public');
let private = require('./private');
let { checkToken } = require('./authorization');

router.use('/public', public);

app.use(bodyParser.json());

router.use('/private', checkToken, private);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(router);
app.listen(5000);