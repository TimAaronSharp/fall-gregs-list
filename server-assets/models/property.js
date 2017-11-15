var mongoose = require('mongoose')

var schema = new mongoose.Schema({

    title: { type: String, required: true },
    squareFeet: { type: String },
    color: { type: String },
    age: { type: Number },
    yearBuilt: { type: Number },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, default: '//placehold.it/200x200' }    

})

module.exports = mongoose.model("Property", schema)