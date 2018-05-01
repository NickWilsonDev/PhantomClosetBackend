const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

import authorize from './authorize';

router.use('/users', authorize.routes());

app.use(bodyParser.json());
app.use(router);
app.listen(3000);