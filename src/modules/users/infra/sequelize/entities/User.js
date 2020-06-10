const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      profile: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Solicitation, { foreignKey: 'user_id', as: 'solicitations' });
  }
}

module.exports = User;
