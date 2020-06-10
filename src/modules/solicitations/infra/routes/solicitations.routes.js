const express = require('express');
const SolicitationsController = require('../controllers/SolicitationsController');
const ProductsController = require('../controllers/ProductsController');


const solicitationsRouter = express.Router();

solicitationsRouter.post('/:user_id', SolicitationsController.store);
solicitationsRouter.get('/', SolicitationsController.index);

solicitationsRouter.post('/:solicitation_id/products', ProductsController.store);
solicitationsRouter.get('/:solicitation_id/products', ProductsController.index);
solicitationsRouter.delete('/:solicitation_id/products', ProductsController.delete);
module.exports = solicitationsRouter;
