const mongoose = require('./connection.js');

const CharacterSchema = new mongoose.Schema({
    name: String,
    gender: String,
    house: String,
    bloodStatus: String
});

mongoose.model('Character', CharacterSchema);

module.exports = mongoose;
