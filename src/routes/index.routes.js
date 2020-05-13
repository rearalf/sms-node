const { Router } = require('express');
const router = Router();

const { indexController, postMessage, reciveMessage } = require('../controllers/index.controller');

/* Main Routes */
router.get('/', indexController);

/* Send an SMS */
router.post('/send-sms', postMessage);

/* Recive an SMS */
router.post('/sms', reciveMessage);

module.exports = router;
