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

exports.list = (_, res) => {
  Artist.find({}, (__, artists) => {
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

exports.update = (req, res) => {
  console.log('*');
  Artist.findById({ _id: req.params.artistId }, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found. Better luck next time!' });
    }
    artist.set({
      genre: req.body.genre,
    });
    artist.save().then(() => {
      return res.status(200).json(artist);
    });
  });
};
