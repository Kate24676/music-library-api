const Artist = require('../models/artist');


exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};

exports.list = (req, res) => {
  Artist.findById({}, (err, artists) => {
    console.log('****', artists);
    return res.status(200).send(artists);
  });
};

exports.find = (req, res) => {
  Artist.findById({ _id: req.params.artistId }, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found. Better luck next time!' });
    } else {
      res.status(200).json(artist);
    }
  });
};
