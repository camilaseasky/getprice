
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'profile',
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),

  down: (queryInterface) => queryInterface.removeColumn(
    'users',
    'profile',
  ),
};
