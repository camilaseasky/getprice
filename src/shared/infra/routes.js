const express = require('express');
const usersRouter = require('../../modules/users/infra/routes/users.routes');
const solicitationsRouter = require('../../modules/solicitations/infra/routes/solicitations.routes');


const routes = express.Router();

routes.use('/users', usersRouter);
routes.use('/solicitations', solicitationsRouter);

module.exports = routes;
