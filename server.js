const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let public = require('./public');
let private = require('./private');
let { checkToken } = require('./authorization');

let app = express();
let router = new Router();

router.use('/public', public);
router.use('/private', checkToken, private);

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(router);
app.listen(process.env.PORT || 5000);
