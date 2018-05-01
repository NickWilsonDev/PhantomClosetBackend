require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const express = require('express');
const signIn = new express.Router();

import { userByUsername } from './queries';

const signature = process.env.SIGNATURE;

let createToken = user =>
  jwt.sign(
    { userId: user.ID },
    signature,
    { expiresIn: '7d' }
  );

let postTokens = async (req, res) => {
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

signIn.post('/', postTokens);

export default signIn;