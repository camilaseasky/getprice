const { Model, DataTypes } = require('sequelize');

class Solicitation extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'solicitations',
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'buyer' });
    this.belongsToMany(models.Product, { foreignKey: 'solicitation_id', through: 'solicitation_products', as: 'products' });
  }
}

module.exports = Solicitation;
