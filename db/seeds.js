const mongoose = require('./schema.js');
const Character = mongoose.model('Character');
const CharacterData = require('./hp-data.json');

Character.remove({})
    .then(() => {
        Character.collection.insert(CharacterData).then(Characters => {
            console.log(characters);
            process.exit();
        });
    })
    .catch(err => {
        console.log(err);
    });
