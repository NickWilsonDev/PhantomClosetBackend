const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let public = require('./public');
// let private = require('./private');
let { checkToken } = require('./authorization');

router.use('/public', public);
// router.use('/private', checkToken, private);
router.use('/', (req, res) => res.send('hello'))
app.use(bodyParser.json());
app.use(router);
app.listen(process.env.PORT || 5000);
