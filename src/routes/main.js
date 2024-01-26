const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const loginValidation = require('../validation/loginValidation')
router.get('/', mainController.index); 
router.post('/form', mainController.form); 



module.exports = router;
