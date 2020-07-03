const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    yearOfBith: Number,
    yearOfDeath: Number,
    country: String,
    description: String,
    keyWords: [String]
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person