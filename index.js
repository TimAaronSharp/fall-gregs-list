var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')
var animalRoutes = require('./server-assets/routes/animal-routes')
var propertyRoutes = require('./server-assets/routes/property-routes')
var computerRoutes = require('./server-assets/routes/computer-routes')

var server = express()
var port = 5000

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)
server.use(animalRoutes)
server.use(propertyRoutes)
server.use(computerRoutes)

server.listen(port, () => {
    console.log('Server is running on port ', port)
})