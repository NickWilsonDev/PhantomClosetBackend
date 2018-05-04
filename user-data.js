let { 
    addToQueueDb,
    getFromQueueDb,
    getAtHomeDb
 } = require('./queries')

let addToQueue = (req, res) => {
    let { userId, cardId, position } = req.body;
    addToQueueDb(userId, cardId, position)
    .then(data => res.send('Added to queue.'))
}

let getFromQueue = (req, res) => {
    let { userId } = req.JWT;
    getFromQueueDb(userId)
    .then(data => res.send(data))
}

let getAtHome = (req, res) => {
    let { userId } = req.JWT;
    getAtHomeDb(userId)
    .then(data => res.send(data))
}

module.exports = {
    addToQueue,
    getFromQueue,
    getAtHome
}
