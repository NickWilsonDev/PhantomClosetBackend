require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signature = process.env.SIGNATURE;

let { userByUsername, addUserToDb } = require('./queries');

let checkToken = async (req, res, next) => {
  let { authorization: token } = req.headers;
  let payload;
  try {
    payload = await jwt.verify(token, signature);
  } catch(err) {
    console.log(err);
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
    { user: user.id,
      role: user.role },
    signature,
    { expiresIn: '7d' }
  );

let postTokens = async (req, res) => {
  let { username, password } = req.body;
  let user = await userByUsername(username);
  user = user[0];
  let isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    let token = createToken(user);
    user.token = token;
    delete user.password;
    res.send(user);
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
        .then(res.send('User added.'));
    })
}

let checkRole = (req, res, next) => {
  let { role } = req.jwt;
  if (role === 'administrator') {
    next();
  } else {
    res.send('this is not an administrator')
  }
}

module.exports = {
    addUser,
    postTokens,
    checkToken,
    checkRole
}