const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

import public from './public';
import private from './private';
import { checkToken } from './authorization';

router.use('/public', public.routes());
router.use('/private', checkToken, private.routes());

app.use(bodyParser.json());
app.use(router);
app.listen(3000);