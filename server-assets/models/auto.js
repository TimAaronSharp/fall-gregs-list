var mongoose = require('mongoose')

var schema = new mongoose.Schema({

    title: { type: String, required: true },
    make: { type: String},
    model: { type: String },
    year: { type: Number},
    price: { type: Number, required: true },
    mileage: { type: Number, $gt: -1 },
    color: { type: String },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    condition: { type: String },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200' }

});

module.exports = mongoose.model('Auto', schema)