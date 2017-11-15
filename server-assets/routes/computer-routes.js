var Computers = require('../models/computer')
var router = require('express').Router()

router.get('/api/computers', (req, res, next) => {
    Computers.find({})
        .then(computers => res.send(computers))
        .catch(err => res.status(400).send(err))
})

router.get('/api/computers/:id', (req, res, next) => {
    Computers.findById(req.params.id)
        .then(computer => res.send(computer))
        .catch(err => res.status(400).send(err))
})

router.post('/api/computers', (req, res, next) => {
    Computers.create(req.body)
        .then(computer => res.send(computer))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/computers/:id', (req, res, body) => {
    Computers.findByIdAndRemove(req.params.id)
        .then((computer) => {
            res.send({ message: 'Successfully removed computer at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})

module.exports = router