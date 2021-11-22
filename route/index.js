const router = require("express").Router();
const validate = require('../middleware/validate');
const authController = require('../controller/auth')

router.post('/auth', validate, authController.auth )
// router.get('/authConnect', authController.authConnect )
router.post('/auth_done', authController.auth_done )
router.post('/on_play', authController.on_play)
router.post('/on_play_done', authController.on_play_done)
router.post('/on_record_done', authController.on_record_done)
module.exports = router