var Autos = require('../models/auto')
var router = require('express').Router()

router.get('/api/autos', (req, res, next) => {
    Autos.find({})
        .then(autos => res.send(autos))
        .catch(err => res.status(400).send(err))
})

router.get('/api/autos/:id', (req, res, next) => {
    Autos.findById(req.params.id)
        .then(auto => res.send(auto))
        .catch(err => res.status(400).send(err))
})

router.post('/api/autos', (req, res, next) => {
    Autos.create(req.body)
        .then(auto => res.send(auto))
        .catch(err => res.status(400).send(err))

})
router.delete('/api/autos/:id', (req, res, next) => {
    Autos.findByIdAndRemove(req.params.id)
        .then((auto) => {
            res.send({ message: 'Successfully removed auto at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})

module.exports = router