const express = require('express');
const parser = require('body-parser');
// const cors = require('cors');
const mongoose = require('./db/CharacterModels.js');
const Character = mongoose.model('Character');

const app = express();

app.set('port', process.env.PORT || 3001);
// app.use(cors());
app.use(parser.json());

app.get('/characters', (req, res) => {
    Character.find()
        .then(characters => {
            res.json(characters);
        })
        .catch(err => {
            console.log(err);
        });
});

app.post('/characters', (req, res) => {
    Character.create(req.body)
        .then(character => {
            res.json(character);
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/characters/:id', (req, res) => {
    Character.findById(req.params.id)
        .then(character => {
            res.json(character);
        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
});
