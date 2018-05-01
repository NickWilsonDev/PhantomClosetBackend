require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signature = process.env.SIGNATURE;

import { userByUsername } from './queries';

export let checkToken = async (req, res, next) => {
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

let createToken = user =>
  jwt.sign(
    { userId: user.ID },
    signature,
    { expiresIn: '7d' }
  );

export let postTokens = async (req, res) => {
  let { email, password } = req.body;
  let user = await userByUsername(email);
  let isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    let token = createToken(user);
    res.send(token);
  } else {
    res.send('Invalid username and/or password.');
  }
};