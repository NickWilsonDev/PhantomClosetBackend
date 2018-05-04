let { 
    addToQueueDb,
    getFromQueueDb
 } = require('./queries')

let addToQueue = (req, res) => {
    let { userId, cardId, position } = req.body;
    addToQueueDb(userId, cardId, position)
    .then(data => res.send('Added to queue.'))
}

let getFromQueue = (req, res) => {
    let {userId} = req.body;
    getFromQueueDb(userId)
    .then(data => res.send(JSON.stringify(data)))
}

module.exports = {
    addToQueue,
    getFromQueue
}
