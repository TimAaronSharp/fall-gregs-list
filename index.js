var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')
var animalRoutes = require('./server-assets/routes/animal-routes')
var propertyRoutes = require('./server-assets/routes/property-routes')

var server = express()
var port = 5000

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)
server.use(animalRoutes)
server.use(propertyRoutes)

//------------------------ANIMALS------------------------
// server.get('/api/animals', (req, res, next) => {
//     res.send(animals)
// })

// server.post('/api/animals', (req, res, next) => {
//     animals.push(req.body)
//     res.send({ message: 'It worked. You just created a new animal listing' })
// })
// server.delete('/api/animals/:index', (req, res, next) => {
//     if (animals[req.params.index]) {
//         animals.splice(req.params.index, 1)
//         res.send({ message: 'Successfully removed the animal listing' })
//     } else {
//         res.status(400).send({ error: 'Bad index provided' })
//     }
//     res.send(animals)
// })
//^^^^^^^^^^^^^^^^^^^^^^^^ANIMALS^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------AUTOS----------------------------------

// server.get('/api/autos', (req, res, next) => {
//     res.send(autos)
// })

// server.post('/api/autos', (req, res, next) => {
//     autos.push(req.body)
//     res.send({ message: 'It worked. You just created a new auto listing' })
// })
// server.delete('/api/autos/:index', (req, res, next) => {
//     if (autos[req.params.index]) {
//         autos.splice(req.params.index, 1)
//         res.send({ message: 'Successfully removed the auto listing' })
//     } else {
//         res.status(400).send({ error: 'Bad index provided' })
//     }
//     res.send(autos)
// })
// //^^^^^^^^^^^^^^^^^^^^^^^^AUTOS^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// //---------------------PROPERTIES-----------------------------
// server.get('/api/properties', (req, res, next) => {
//     res.send(properties)
// })

// server.post('/api/properties', (req, res, next) => {
//     properties.push(req.body)
//     res.send({ message: 'It worked. You just created a new property listing' })
// })
// server.delete('/api/properties/:index', (req, res, next) => {
//     if (properties[req.params.index]) {
//         properties.splice(req.params.index, 1)
//         res.send({ message: 'Successfully removed the property listing' })
//     } else {
//         res.status(400).send({ error: 'Bad index provided' })
//     }
//     res.send(properties)
// })
// //^^^^^^^^^^^^^^^^^^^^^^^^PROPERTIES^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// server.listen(port, () => {
//     console.log('Server is running on port ', port)
// })