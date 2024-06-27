const express = require('express');
const router = express.Router()

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', validation.createUser, usersController.createUser);

router.put('/:id', validation.createUser, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);


module.exports = router;