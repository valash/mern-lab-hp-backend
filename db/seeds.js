const mongoose = require('./CharacterModels');
// const mongoose = require('./schema.js');

const Character = mongoose.model('Character');
// const Character = require('./CharacterModels');
const CharacterData = require('./hp-data.json');

Character.remove({})
    .then(() => {
        Character.collection.insert(CharacterData).then(characters => {
            console.log(characters);
            process.exit();
        });
    })
    .catch(err => {
        console.log(err);
    });
