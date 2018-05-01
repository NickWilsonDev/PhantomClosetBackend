let { getSetsDb } = require('./queries')

let getSets = (req, resp) => {
    getSetsDb().then(sets => {
        setNameArray = sets.map(name => name.setname);
        resp.send(setNameArray);
    })
}

module.exports = {
    getSets
}