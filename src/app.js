const express = require('express');
const artistController = require('./controller/artist');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello blahblah!' });
});

app.post('/artists', (req, res) => {
  artistController.create(req, res);
});

app.get('/artists', artistController.list);

app.get('/artists/artistId', artistController.find);

module.exports = app;
