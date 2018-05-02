let { getSetsDb, getCardByNameDb } = require('./queries')

let getSets = (req, res) => {
    getSetsDb().then(sets => {
        setNameArray = sets.map(name => name.setname);
        res.send(setNameArray);
    })
}

let getCardByName = (req, res) => {
    let card = req.params.name;
    getCardByNameDb(card).then(cards =>
        res.send(cards))
}

module.exports = {
    getSets,
    getCardByName
}