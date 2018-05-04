const express = require('express');
const administrator = new express.Router();

administrator.get('/', (req, res) => {
    res.send('you passed!');
})

module.exports = administrator;
