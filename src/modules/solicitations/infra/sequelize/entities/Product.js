const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Solicitation, { foreignKey: 'product_id', through: 'solicitation_products', as: 'solicitations' });
  }
}

module.exports = Product;
