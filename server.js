const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

let public = require('./public');
// let private = require('./private');
let { checkToken } = require('./authorization');

router.use('/public', public);
// router.use('/private', checkToken, private);

app.use(bodyParser.json());
app.use(router);
app.listen(3000);