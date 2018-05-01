const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

import signIn from './sign-in';
import private from './private';

router.use('/signin', signIn.routes());
router.use('/private', private.routes());

app.use(bodyParser.json());
app.use(router);
app.listen(3000);