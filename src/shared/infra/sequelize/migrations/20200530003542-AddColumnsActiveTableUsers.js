
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'active',
    {
      type: Sequelize.BOOLEAN,
    },
  ),

  down: (queryInterface) => queryInterface.removeColumn(
    'users',
    'active',
  ),
};
