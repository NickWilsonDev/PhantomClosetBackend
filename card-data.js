let { 
    getSetsDb, 
    getCardsByNameDb, 
    getCardsByNameAutocompleteDb
 } = require('./queries')

let getSets = (req, res) => {
    getSetsDb().then(sets => {
        setNameArray = sets.map(name => name.setname);
        res.send(setNameArray);
    })
}

let getCardsByName = (req, res) => {
    let card = req.params.name;
    getCardsByNameDb(card).then(cards =>
        res.send(cards))
}

let getCardsByNameAutocomplete = (req, res) => {
    let card = req.params.name;
    getCardsByNameAutocompleteDb(card).then(names => {
        cards = names.map(name => name.name);
        res.send(cards);
    })
}

module.exports = {
    getSets,
    getCardsByName,
    getCardsByNameAutocomplete
}