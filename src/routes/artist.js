const express = require('express');
const artistController = require('../controller/artist');

const router = express.Router();


router.post('/', artistController.create);
router.get('/', artistController.list);
router.get('/:artistId', artistController.find);
router.patch('/:artistId', artistController.update);
router.delete('/:artistId', artistController.delete);


module.exports = router;
