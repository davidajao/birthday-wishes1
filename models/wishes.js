const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Wish = new Schema({
    person_name: { type: String, required: true },
    audio_url: { type: String, required: true },
    image_url: { type: String, required: true },
    wishes: [{ type: String, required: false }],
});

module.exports = mongoose.model('Wish', Wish)