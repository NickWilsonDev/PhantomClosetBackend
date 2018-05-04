let { 
    getSetsDb, 
    getCardsByNameDb, 
    getCardsByNameAutocompleteDb,
    getCardsBySetNameDb,
    getCardsFromStandardDb,
    getFromQueueDb
 } = require('./queries')

let getSets = (req, res) => {
    getSetsDb().then(sets => {
        setNameArray = sets.map(name => name.setname);
        res.send(setNameArray);
    })
}

let getCardsFromStandard = (req, res) => {
    getCardsFromStandardDb().then(cards => {
        res.send(cards)
    })
};

let getCardsInSpecificSets = (req, res) => {
    let set = req.params.set;
    getCardsBySetNameDb(set).then(cards => 
        res.send(cards))
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

let getCardsFromUserQueue = (req, res) => {
    let userid = req.params.userid;
    getFromQueueDb(userid).then( cards =>
        res.send(cards))
}

module.exports = {
    getSets,
    getCardsFromStandard,
    getCardsByName,
    getCardsByNameAutocomplete,
    getCardsInSpecificSets,
    getCardsFromUserQueue
}
