require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signature = process.env.SIGNATURE;

let { userByUsername, addUserToDb } = require('./queries');

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

let createToken = user =>
  jwt.sign(
    { userId: user.ID },
    signature,
    { expiresIn: '7d' }
  );

let postTokens = async (req, res) => {
  let { username, password } = req.body;
  let user = await userByUsername(username);
  let isValid = await bcrypt.compare(password, user[0].password);
  if (isValid) {
    let token = createToken(user);
    res.send(token);
  } else {
    res.send('Invalid username and/or password.');
  }
};

let saltAndHashPassword = (password) =>
    bcrypt.hash(password, 10);

let addUser = (req, res) => {
    let { username, password } = req.body;
    saltAndHashPassword(password)
    .then(hashedPassword => {
        addUserToDb(username, hashedPassword)
        .then(data => res.send('User added.'));
    })
}

module.exports = {
    addUser,
    postTokens,
    checkToken
}