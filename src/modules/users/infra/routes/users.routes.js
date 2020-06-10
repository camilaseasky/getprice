const express = require('express');
const UsersController = require('../controllers/UsersController');


const usersRouter = express.Router();

usersRouter.post('/', UsersController.store);

module.exports = usersRouter;
