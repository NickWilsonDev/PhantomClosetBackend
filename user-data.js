let { 
    addToQueueDb
 } = require('./queries')

let addToQueue = (req, res) => {
    let { userId, cardId, position } = req.body;
    addToQueueDb(userId, cardId, position)
    .then(data => res.send('Added to queue.'))
}

module.exports = {
    addToQueue,
}