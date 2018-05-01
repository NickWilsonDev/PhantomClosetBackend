const express = require('express');
const Router = express.Router;
const bodyParser = require('body-parser');

let app = express();
let router = new Router();

import public from './public';
import private from './private';

let checkToken = async (req, res, next) => {
  let { authorization: token } = req.headers;
  let payload;
  try {
    payload = jwt.verify(token, signature);
  } catch(err) {
    // catch the error
  }

  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.send('Invalid Token');
  }
};

router.use('/public', public.routes());
router.use('/private', checkToken, private.routes());

app.use(bodyParser.json());
app.use(router);
app.listen(3000);