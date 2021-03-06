// ESTABLISH WHERE THE DB LIVES
var mongoose = require('mongoose')
var connectionstring = 'mongodb://test:test@ds064198.mlab.com:64198/my-first-database'
var connection = mongoose.connection;


// Establishes MongoDb Connection
mongoose.connect(connectionstring, {
	useMongoClient: true,
	keepAlive: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function () {
    console.log('We are connected to the db')
});