var mongoose = require('mongoose')

var schema = new mongoose.Schema({

    title: { type: String, required: true },
    cpu: { type: String },
    ram: { type: Number },
    videoCard: { type: String },
    soundCard: { type: String },
    powerSupply: { type: String },
    motherboard: { type: String },
    usbPorts: { type: Number },
    hdmiPorts: { type: Number },
    caseSize: { type: String },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    img: { type: String, default: '//palcehold.it/200x200' },
    price: { type: Number }

})

module.exports = mongoose.model('Computer', schema)