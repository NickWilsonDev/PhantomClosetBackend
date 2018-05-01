let { getSetsDb } = require('./queries')

let getSets = (req, res) => {
    getSetsDb().then(sets => {
        setNameArray = sets.map(name => name.setname);
        res.send(setNameArray);
    })
}

module.exports = {
    getSets
}