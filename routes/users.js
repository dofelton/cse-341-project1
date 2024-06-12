const express = require('express');
const router = express.Router()

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

modules.export = router;