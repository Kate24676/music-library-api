const express = require('express');
const artistController = require('../controller/artist');

const router = express.Router();


router.get('/artists', artistController.list);
router.get('/artists/artistId', artistController.find);


module.exports = router;
