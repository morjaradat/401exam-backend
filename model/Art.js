const mongoose = require('mongoose');


const artSchema = mongoose.Schema({
    title: { type: String, lowercase: true, unique: true, trim: true },
    slug: { type: String, lowercase: true, unique: true, trim: true },
    thumbnail: String,
    artist_name: String,
    description: String
});

const ArtModel = mongoose.model('artData', artSchema);

module.exports = ArtModel;