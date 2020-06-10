const Sequelize = require('sequelize');
const dbconfig = require('./config/config.json');

const User = require('../../../modules/users/infra/sequelize/entities/User');
const Solicitation = require('../../../modules/solicitations/infra/sequelize/entities/Solicitation');
const Product = require('../../../modules/solicitations/infra/sequelize/entities/Product');


const connection = new Sequelize(dbconfig);

User.init(connection);
Solicitation.init(connection);
Product.init(connection);

User.associate(connection.models);
Solicitation.associate(connection.models);
Product.associate(connection.models);

module.export = connection;
