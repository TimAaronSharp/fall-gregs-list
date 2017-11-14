var express = require('express')
var bp = require('body-parser')
var server = express()
var port = 5000

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
var animals = []
var autos = []
var properties = []

// {
//     id: 'ksaldjflkasdjflasdkj',
//     species: 'cat',
//     breed: 'Maine Coon',
//     color: 'brown',
//     age: '2',
//     trained: false,
//     houseTrained: true,
//     title: 'Your New Animal',
//     location: 'Boise',
//     contact: 'animalseller@greg.com',
//     img: '//placehold.it/200x200',
//     price: 200,
//     personality: 'energetic'
// }

// {
//     id: 'asdfkljsdafdsaflkj239023u9402u',
//     make: 'Honda',
//     model: 'Accord',
//     year: 1987,
//     color: 'Burgandy',
//     price: 1800,
//     mileage: 323200,
//     condition: 'Like New',
//     engineId: '3', //GOOD QUESTION
//     description: 'Runs great with gas',
//     location: 'Boise',
//     contact: 'testcar@cars.auto',
//     img: '//loremflickr.com/200/200/car',
//     title: 'Your New Car'
// }
// {
//     id: 'asdjfhjaklh',
//     squareFeet: 1000,
//     color: 'pink',
//     age: 50,
//     yearBuilt: 1967,
//     title: 'Your New Property',
//     location: 'Boise',
//     contact: 'propertyseller@greg.com',
//     img: '//placehold.it/200x200',
//     price: 200,
// }
//------------------------ANIMALS------------------------
server.get('/api/animals', (req, res, next) => {
    res.send(animals)
})

server.post('/api/animals', (req, res, next) => {
    animals.push(req.body)
    res.send({ message: 'It worked. You just created a new animal listing' })
})
server.delete('/api/animals/:index', (req, res, next) => {
    if (animals[req.params.index]) {
        animals.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the animal listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
    res.send(animals)
})
//^^^^^^^^^^^^^^^^^^^^^^^^ANIMALS^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------AUTOS----------------------------------

server.get('/api/autos', (req, res, next) => {
    res.send(autos)
})

server.post('/api/autos', (req, res, next) => {
    autos.push(req.body)
    res.send({ message: 'It worked. You just created a new auto listing' })
})
server.delete('/api/autos/:index', (req, res, next) => {
    if (autos[req.params.index]) {
        autos.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the auto listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
    res.send(autos)
})
//^^^^^^^^^^^^^^^^^^^^^^^^AUTOS^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//---------------------PROPERTIES-----------------------------
server.get('/api/properties', (req, res, next) => {
    res.send(properties)
})

server.post('/api/properties', (req, res, next) => {
    properties.push(req.body)
    res.send({ message: 'It worked. You just created a new property listing' })
})
server.delete('/api/properties/:index', (req, res, next) => {
    if (properties[req.params.index]) {
        properties.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the property listing' })
    } else {
        res.status(400).send({ error: 'Bad index provided' })
    }
    res.send(properties)
})
//^^^^^^^^^^^^^^^^^^^^^^^^PROPERTIES^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
server.listen(port, () => {
    console.log('Server is running on port ', port)
})