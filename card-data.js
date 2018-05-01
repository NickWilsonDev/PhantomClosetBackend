let { getSetsDb } = require('./queries')

let getSets = (req, resp) => {
    getSetsDb().then(sets => 
        resp.send(sets))
}

module.exports = {
    getSets
}