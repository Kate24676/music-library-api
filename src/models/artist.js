const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({ name: 'string', genre: 'string' });
const Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;
