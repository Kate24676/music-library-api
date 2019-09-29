const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({ name: 'string', year: 'string' });
const Album = mongoose.model('album', albumSchema);


module.exports = Album;
