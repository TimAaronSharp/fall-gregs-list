var mongoose = require('mongoose')

var schema = new mongoose.Schema({

    title: { type: String, required: true },
    species: { type: String },
    breed: { type: String },
    color: { type: String },
    age: { type: Number },
    trained: { type: Boolean },
    houseTrained: { type: Boolean },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    price: { type: Number, required: true },
    personality: { type: String },
    img: { type: String, default: '//placehold.it/200x200' }

})

module.exports = mongoose.model("Animal", schema)