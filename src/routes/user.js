const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.post('/', controller.singin);
router.post('/:user', controller.login);
router.put('/:id', controller.savePlaylist);
router.get('/:user', controller.getPlaylists);

module.exports = router;